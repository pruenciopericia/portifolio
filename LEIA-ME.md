# Site — Ademir Faustino de Pruêncio Jr.

Site estático em HTML/CSS. Não depende de build, framework ou servidor.

## Estrutura

```
index.html          Início
metodologia.html    Metodologia
portfolio.html      Portfólio técnico
contato.html        Contato
css/estilo.css      Folha de estilo única
js/menu.js          Menu recolhível (só atua em telas estreitas)
assets/
  foto-perfil.jpg           já incluída
  cv-ademir-pruencio.pdf    já incluído
  pecas/
    peca-01-taxa-media-bacen.pdf   >>> FALTA SUBIR
.nojekyll           evita processamento desnecessário no GitHub Pages
```

## Antes de publicar — 2 pendências

**1. A peça 1 em PDF.** Salve o arquivo exatamente com este nome:

```
assets/pecas/peca-01-taxa-media-bacen.pdf
```

Enquanto ele não existir, o botão "Abrir a peça (PDF)" leva a uma página de erro.

**2. O formulário de contato.** GitHub Pages não executa código de servidor, então o
formulário precisa de um serviço externo. O mais simples é o Formspree:

1. Crie conta em formspree.io e um novo formulário
2. Copie o ID gerado (algo como `xyzabcd`)
3. Em `contato.html`, substitua `SEU_ID_AQUI` na linha:

```html
<form action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

Se preferir não usar formulário, apague o bloco `<form>` inteiro — e-mail, WhatsApp
e LinkedIn continuam funcionando sozinhos.

## Publicar no GitHub Pages

Suba todos os arquivos na raiz do repositório `portifolio`. O endereço
`https://pruenciopericia.github.io/portifolio/` passa a servir o `index.html`.

Todos os caminhos são relativos, então o site funciona tanto na raiz do domínio
quanto em subpasta, sem ajuste.

## Publicar as peças 2 e 3

Os dois cards já existem em `portfolio.html`, marcados como "Em preparação".
Para ativar cada um:

1. Salve o PDF em `assets/pecas/` (sugestão: `peca-02-trava-indexadores.pdf` e
   `peca-03-fronteira-do-perito.pdf`)
2. No card correspondente, remova `peca--reservada` da classe do `<article>`
3. Troque a etiqueta de situação:
   - de: `<span class="peca__situacao peca__situacao--espera">Em preparação</span>`
   - para: `<span class="peca__situacao">Disponível</span>`
4. Antes de `</article>`, acrescente o botão:

```html
<a class="botao" href="assets/pecas/NOME-DO-ARQUIVO.pdf" target="_blank" rel="noopener">Abrir a peça (PDF)</a>
```

## Atualizações frequentes

- **Número de nomeações:** aparece em `index.html` (bloco de credenciais e texto de
  abertura). Atualize os dois juntos para não divergirem.
- **Currículo:** basta sobrescrever `assets/cv-ademir-pruencio.pdf` mantendo o nome.
- **Foto:** sobrescreva `assets/foto-perfil.jpg`, preferencialmente quadrada.
