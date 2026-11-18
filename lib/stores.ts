export const stores = [
  {name:'Mercado Livre',url:'https://lista.mercadolivre.com.br/'},
  {name:'Amazon',url:'https://www.amazon.com.br/s?k='},
  {name:'Pichau',url:'https://www.pichau.com.br/search?q='},
  {name:'TerabyteShop',url:'https://www.terabyteshop.com.br/busca/'},
  {name:'OLX',url:'https://www.olx.com.br/brasil?q='},
  {name:'Facebook Marketplace',url:'https://www.facebook.com/marketplace/search/?query='},
] as const;

export function storeSearchUrl(name: string, search: string): string | null {
  const store = stores.find(item => item.name === name);
  const query = search.trim().slice(0, 150);
  if (!store || !query) return null;
  return store.url + encodeURIComponent(query);
}
