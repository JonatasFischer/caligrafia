# Caligrafia React A4

Aplicativo React + TypeScript para gerar um caderno de caligrafia escolar com duas experiências:

- site responsivo para leitura, navegação e escolha de idioma;
- layout A4 somente no modo de impressão, usando `@media print` e `@page`.

## Tecnologias

- React
- TypeScript
- Vite
- i18next + react-i18next
- HTML/CSS de impressão A4

## Como rodar

```bash
npm install
npm run dev
```

## Como gerar PDF ou imprimir

1. Abra a aplicação no navegador.
2. Escolha o idioma no seletor: português, inglês ou alemão.
3. Use o botão `Imprimir / salvar PDF` ou o atalho de impressão do navegador.
4. Escolha papel `A4`.
5. Desative cabeçalhos e rodapés do navegador.
6. Use escala `100%` ou `Ajustar à área imprimível` se a impressora cortar margens.

## Fontes de caligrafia

O `index.html` carrega Grundschrift pelo FontLibrary para tela e impressão:

```html
<link
  rel="stylesheet"
  media="screen"
  href="https://fontlibrary.org//face/grundschrift"
  type="text/css"
/>
<link
  rel="stylesheet"
  media="print"
  href="https://fontlibrary.org//face/grundschrift"
  type="text/css"
/>
```

As linhas de treino usam este stack:

```css
"GrundschriftRegular", "GrundschriftNormal", "Grundschrift", "Andika", "Comic Sans MS", "Arial Rounded MT Bold", sans-serif
```

## Alinhamento das linhas

Os blocos de caligrafia usam SVG. A linha de base é uma linha real do SVG e o texto-modelo é renderizado com `y` na mesma baseline. Isso evita o desalinhamento que ocorria quando o texto era posicionado por `top`/`line-height` em HTML comum.

## Estrutura

- `src/i18n/`: configuração i18next e arquivos `pt`, `en`, `de`.
- `src/data/workbook.ts`: dados das semanas, palavras, frases e grupos de letras.
- `src/components/CaligraphyGuide.tsx`: linhas de escrita e texto-modelo alinhado.
- `src/components/WorkbookPage.tsx`: página imprimível.
- `src/components/PracticeBlock.tsx`: bloco de treino de letras/palavras/frases.
- `src/components/Workbook.tsx`: composição do documento completo.

## Plano de origem

O arquivo `plano_treino_caligrafia_letra_de_forma.md` mantém o plano pedagógico longo usado como referência para o material.
