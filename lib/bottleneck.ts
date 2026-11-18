export type BottleneckInput = {
  cpu: string;
  gpu: string;
  ramGb: number;
  resolution: '1080p' | '1440p' | '4K';
  usage: 'competitive' | 'aaa' | 'general';
};

export type BottleneckResult = {
  status: 'limited' | 'unknown';
  likelyLimit: 'CPU' | 'GPU' | 'RAM' | 'Indeterminado';
  confidence: 'Baixa' | 'Moderada';
  reasons: string[];
  suggestions: string[];
};

/** Qualitative screening only. Never convert these hints into a fake bottleneck percentage or FPS. */
export function analyzeBottleneck(input: BottleneckInput): BottleneckResult {
  const cpu = input.cpu.trim();
  const gpu = input.gpu.trim();
  const ram = Number(input.ramGb);
  if (!cpu || !gpu || !Number.isFinite(ram) || ram <= 0) {
    return { status: 'unknown', likelyLimit: 'Indeterminado', confidence: 'Baixa',
      reasons: ['Informe processador, placa de vídeo e capacidade de RAM para obter uma triagem.'],
      suggestions: ['Confirme os modelos exatos e, se possível, informe benchmarks do jogo desejado.'] };
  }

  const reasons: string[] = [];
  const suggestions: string[] = [];
  let likelyLimit: BottleneckResult['likelyLimit'];
  if (ram < 16) {
    likelyLimit = 'RAM';
    reasons.push(`${ram} GB de memória podem limitar jogos atuais e causar travamentos.`);
    suggestions.push('Confira consumo real de memória, dual-channel e a possibilidade de usar 16 GB ou mais.');
  } else if (input.usage === 'competitive' && input.resolution === '1080p') {
    likelyLimit = 'CPU';
    reasons.push('Em jogos competitivos a 1080p com FPS muito alto, a CPU pode se tornar o limitador.');
    suggestions.push('Compare uso por núcleo, 1% low e benchmarks com a mesma GPU.');
  } else {
    likelyLimit = 'GPU';
    reasons.push(input.resolution === '4K'
      ? 'Em 4K a carga gráfica costuma ser alta, aumentando a chance de limite pela GPU.'
      : 'Em jogos com gráficos exigentes, a GPU costuma determinar o FPS antes da CPU.');
    suggestions.push('Compare benchmarks do jogo nas mesmas configurações e observe uso de GPU e VRAM.');
  }
  reasons.push('O resultado é uma tendência por tipo de uso, não uma medição desta combinação específica.');
  suggestions.push('Verifique temperatura, energia, drivers, velocidade de memória e limites de FPS antes de trocar peças.');
  return {status:'limited', likelyLimit, confidence:'Baixa', reasons, suggestions};
}
