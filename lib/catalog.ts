import type { Part } from './compatibility';

export type CatalogItem = {
  id: string;
  name: string;
  category: 'Processadores' | 'Placas de vídeo' | 'Placas-mãe' | 'Memória RAM' | 'Fontes' | 'Armazenamento';
  specs: string;
  kind?: Part['kind'];
  socket?: string;
  ramType?: string;
  tdp?: number;
  watts?: number;
};

// Fichas de modelos, não ofertas comerciais nem confirmação de estoque.
export const catalog: CatalogItem[] = [
  {id:'r5-4500',name:'AMD Ryzen 5 4500',category:'Processadores',specs:'6 núcleos · AM4 · sem vídeo integrado',kind:'cpu',socket:'AM4',tdp:65},
  {id:'r5-5500',name:'AMD Ryzen 5 5500',category:'Processadores',specs:'6 núcleos · AM4 · sem vídeo integrado',kind:'cpu',socket:'AM4',tdp:65},
  {id:'r5-5600',name:'AMD Ryzen 5 5600',category:'Processadores',specs:'6 núcleos · AM4 · sem vídeo integrado',kind:'cpu',socket:'AM4',tdp:65},
  {id:'r5-5600gt',name:'AMD Ryzen 5 5600GT',category:'Processadores',specs:'6 núcleos · AM4 · vídeo integrado',kind:'cpu',socket:'AM4',tdp:65},
  {id:'i5-12400f',name:'Intel Core i5-12400F',category:'Processadores',specs:'6 núcleos · LGA1700 · sem vídeo integrado',kind:'cpu',socket:'LGA1700',tdp:65},
  {id:'i5-13400f',name:'Intel Core i5-13400F',category:'Processadores',specs:'10 núcleos · LGA1700 · sem vídeo integrado',kind:'cpu',socket:'LGA1700',tdp:65},
  {id:'rx-6400',name:'AMD Radeon RX 6400 4GB',category:'Placas de vídeo',specs:'GPU dedicada · 4 GB GDDR6',kind:'gpu',tdp:53},
  {id:'rx-6600',name:'AMD Radeon RX 6600 8GB',category:'Placas de vídeo',specs:'GPU dedicada · 8 GB GDDR6',kind:'gpu',tdp:132},
  {id:'rtx-3050',name:'NVIDIA GeForce RTX 3050 6GB',category:'Placas de vídeo',specs:'Versão 6 GB · confira a variante',kind:'gpu',tdp:70},
  {id:'rtx-4060',name:'NVIDIA GeForce RTX 4060 8GB',category:'Placas de vídeo',specs:'GPU dedicada · 8 GB GDDR6',kind:'gpu',tdp:115},
  {id:'b450-steel',name:'ASRock B450M Steel Legend',category:'Placas-mãe',specs:'AM4 · DDR4 · mATX · verifique BIOS',kind:'motherboard',socket:'AM4',ramType:'DDR4'},
  {id:'b550-aorus',name:'Gigabyte B550M AORUS Elite',category:'Placas-mãe',specs:'AM4 · DDR4 · mATX',kind:'motherboard',socket:'AM4',ramType:'DDR4'},
  {id:'b660m',name:'ASUS PRIME B660M-A D4',category:'Placas-mãe',specs:'LGA1700 · DDR4 · mATX',kind:'motherboard',socket:'LGA1700',ramType:'DDR4'},
  {id:'fury-16',name:'Kingston Fury Beast 16GB DDR4 3200MHz',category:'Memória RAM',specs:'DDR4 · confira módulos e latência',kind:'ram',ramType:'DDR4'},
  {id:'corsair-16',name:'Corsair Vengeance LPX 16GB DDR4 3200MHz',category:'Memória RAM',specs:'DDR4 · confira módulos e latência',kind:'ram',ramType:'DDR4'},
  {id:'crucial-ddr5',name:'Crucial Pro 32GB DDR5 5600MHz',category:'Memória RAM',specs:'DDR5 · verifique compatibilidade',kind:'ram',ramType:'DDR5'},
  {id:'nv2-1tb',name:'Kingston NV2 1TB NVMe',category:'Armazenamento',specs:'SSD M.2 NVMe · 1 TB'},
  {id:'sn580-1tb',name:'WD Blue SN580 1TB',category:'Armazenamento',specs:'SSD M.2 NVMe · 1 TB'},
  {id:'cx550',name:'Corsair CX550 550W',category:'Fontes',specs:'550 W · confirme conectores e versão',kind:'psu',watts:550},
  {id:'mwe650',name:'Cooler Master MWE Bronze V2 650W',category:'Fontes',specs:'650 W · confirme conectores e versão',kind:'psu',watts:650},
];
