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
- Banco Supabase: esquema de dados em `supabase/schema.sql`, com RLS.

Nenhuma chave privada deve ser enviada ao GitHub. Próximas etapas: autenticação, persistência em nuvem, fontes autorizadas de ofertas e benchmarks.
