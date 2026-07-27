# Site V. A. Rodrigues

Site institucional em React + Vite + Tailwind CSS para a V. A. Rodrigues
(iluminação pública, equipamentos elétricos, automação, mini escavadeira,
poda de árvores e cesto elétrico).

## O que já está pronto

- Todas as seções do briefing: Início, Empresa, Serviços (6), Galeria,
  Área de Atendimento, Formulário de Orçamento e Rodapé.
- Botão flutuante de WhatsApp e botões de CTA já funcionais.
- Design responsivo (celular, tablet, desktop), com animações suaves ao rolar.
- Paleta azul-escuro / amarelo-energia / branco / cinza, como pedido.
- SEO básico (title, description, keywords, og tags) no `index.html`.

## O que falta você substituir (está tudo marcado como "placeholder")

1. **Fotos reais** — hoje o site usa blocos ilustrativos com ícones no lugar
   de fotos (equipe, equipamentos, mini escavadeira, cesto elétrico etc.).
   Troque o componente `<PlaceholderImage />` por `<img src="/fotos/xxx.jpg" />`
   em cada arquivo dentro de `src/components/`.
2. **Dados de contato** — telefone, WhatsApp, e-mail, endereço, redes sociais
   e cidades atendidas ficam centralizados em `src/data/siteConfig.js`.
   Edite esse arquivo e o site inteiro é atualizado automaticamente.
3. **Mapa** — troque `mapEmbedSrc` em `siteConfig.js` pelo link de embed do
   Google Maps com o endereço real da empresa (Google Maps > Compartilhar >
   Incorporar mapa > copiar o link do `src`).
4. **Logo** — hoje o cabeçalho usa um ícone de raio como logo provisório.
   Se você tiver uma logo em arquivo, substitua o bloco no `Header.jsx` e
   `Footer.jsx` por `<img src="/logo.png" />`.

## Como rodar localmente

Requer [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Como gerar a versão final (build)

```bash
npm run build
```

Isso cria a pasta `dist/` com o site pronto para publicar. Essa pasta
também já está incluída neste projeto — você pode abrir
`dist/index.html` diretamente no navegador para visualizar o site sem
precisar instalar nada.

## Como publicar o site

A forma mais simples é usar um serviço gratuito como Vercel ou Netlify:
basta enviar a pasta do projeto (ou conectar o repositório) e o serviço
publica automaticamente.

## Formulário de orçamento

O formulário de orçamento hoje monta uma mensagem e abre o WhatsApp com
os dados já preenchidos (não precisa de servidor/backend). Se preferir
receber por e-mail ou integrar com um CRM, é só ajustar a função
`handleSubmit` em `src/components/QuoteForm.jsx`.
