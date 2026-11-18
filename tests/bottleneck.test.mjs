import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeBottleneck } from '../lib/bottleneck.ts';
import { storeSearchUrl, stores } from '../lib/stores.ts';
import {catalog} from '../lib/catalog.ts';

test('does not invent a result without both models', () => {
  const result = analyzeBottleneck({cpu:'',gpu:'RX 6400',ramGb:16,resolution:'1080p',usage:'aaa'});
  assert.equal(result.status, 'unknown');
});

test('flags low RAM without a fake percentage', () => {
  const result = analyzeBottleneck({cpu:'Ryzen 5 5500',gpu:'RX 6400',ramGb:8,resolution:'1080p',usage:'aaa'});
  assert.equal(result.likelyLimit, 'RAM');
  assert.equal(result.confidence, 'Baixa');
});

test('store links encode special characters and do not allow arbitrary destinations', () => {
  assert.equal(stores.length, 6);
  assert.equal(storeSearchUrl('Desconhecida','CPU'), null);
  assert.equal(storeSearchUrl('Amazon',''), null);
  assert.match(storeSearchUrl('Amazon','Ryzen 5 5600 & GPU'), /Ryzen%205%205600%20%26%20GPU/);
});

test('catalog has unique models and purchase searches', () => {
  assert.equal(new Set(catalog.map(item=>item.id)).size,catalog.length);
  assert.ok(catalog.length>=20);
  for (const item of catalog) assert.ok(storeSearchUrl('Mercado Livre',item.name));
});
