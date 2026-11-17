export type Kind='cpu'|'motherboard'|'ram'|'gpu'|'psu';
export type Part={kind:Kind,name:string,socket?:string,ramType?:string,watts?:number,tdp?:number,price?:number};
export function total(parts:Part[]){return parts.reduce((s,p)=>s+(Number(p.price)||0),0)}
export function checkCompatibility(parts:Part[]){
 const cpu=parts.find(p=>p.kind==='cpu'),board=parts.find(p=>p.kind==='motherboard'),ram=parts.find(p=>p.kind==='ram'),psu=parts.find(p=>p.kind==='psu');
 const issues:string[]=[];
 if(cpu?.name&&board?.name&&cpu.socket&&board.socket&&cpu.socket!==board.socket)issues.push('Socket da CPU incompatível com a placa-mãe.');
 if(ram?.name&&board?.name&&ram.ramType&&board.ramType&&ram.ramType!==board.ramType)issues.push('Tipo de memória incompatível com a placa-mãe.');
 const load=parts.filter(p=>p.name&&p.kind!=='psu').reduce((s,p)=>s+(Number(p.tdp)||0),0);
 if(psu?.name&&psu.watts&&load&&psu.watts<load*1.3)issues.push('Fonte possivelmente insuficiente para a potência estimada.');
 return {compatible:issues.length===0,issues,warnings:['Checagem preliminar: BIOS, dimensões, conectores e qualidade da fonte ainda precisam ser verificados.']};
}
