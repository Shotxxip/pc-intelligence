# PC Intelligence

Plataforma de planejamento de computadores com orçamento, componentes e verificações técnicas.

## Iniciar
```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estado
- Preferências e peças: armazenamento local no navegador.
- Verificação preliminar: socket, tipo de RAM e potência estimada.
- Ofertas reais e benchmarks: ainda não integrados; o aplicativo não inventa dados.
- Catálogo inicial com 20 modelos e botões de busca para comprar (links de pesquisa, não ofertas garantidas).
- Busca nas seis lojas e análise qualitativa de gargalo por cenário, sem percentuais artificiais.
- Para verificar: `npm run typecheck`, `npm test` e `npm run build`.
- Banco Supabase: esquema de dados em `supabase/schema.sql`, com RLS.

Nenhuma chave privada deve ser enviada ao GitHub. Próximas etapas: autenticação, persistência em nuvem, fontes autorizadas de ofertas e benchmarks.
