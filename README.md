# Caligrafia HTML A4

Material didatico imprimivel em A4 para treino intensivo de letra de forma, paciencia e concentracao.

O projeto e propositalmente simples: um arquivo HTML/CSS completo que pode ser aberto diretamente no navegador.

- `index.html`: caderno completo com 66 paginas A4.
- `plano_treino_caligrafia_letra_de_forma.md`: plano pedagogico de origem e referencia longa.

## Por que HTML/CSS

O material didatico e desenhado em HTML/CSS porque o objetivo principal e controlar paginas A4, quebras de pagina, margens, tabelas, fichas, linhas de escrita, modelos de letras, rubricas e folhas repetiveis.

O PDF nao e uma barreira tecnica: abra o HTML no navegador e use `Imprimir` -> `Salvar como PDF` quando precisar de um arquivo PDF. Isso preserva o fluxo de revisao visual e permite ajustar escala, margens e fonte antes de imprimir.

## Como imprimir

1. Abra `index.html` no navegador.
2. Use `Imprimir`.
3. Escolha papel `A4`.
4. Desative cabecalhos e rodapes do navegador.
5. Use escala `100%` ou `Ajustar a area imprimivel` se a impressora cortar margens.
6. Escolha a impressora fisica ou `Salvar como PDF`.

## Fontes e modelos de caligrafia

O HTML carrega Grundschrift pelo FontLibrary:

```html
<link
  rel="stylesheet"
  media="screen"
  href="https://fontlibrary.org//face/grundschrift"
  type="text/css"
/>
```

Tambem ha uma segunda chamada para `media="print"`, para aumentar a chance de o navegador manter a fonte durante a impressao.

As linhas-modelo usam este stack de fontes:

```css
"GrundschriftRegular", "GrundschriftNormal", "Grundschrift", "Andika", "Comic Sans MS", "Arial Rounded MT Bold", "Helvetica", sans-serif
```

Se `Andika`, `Grundschrift` ou outra fonte escolar estiver instalada no sistema, o navegador pode usa-la diretamente na impressao.

Mesmo sem uma fonte escolar especial, o material continua funcional porque os exercicios usam letras grandes, espacamento amplo, linhas-guia e foco em legibilidade, nao em ornamentacao.

## Material incluido

- Capa e guia para os pais.
- Rotina diaria de seis horas com pausas.
- Folha de diagnostico inicial.
- Alfabeto-modelo em minusculas, maiusculas, numeros e caracteres alemaes.
- Fichas por familia motora de letras.
- Paginas diarias para seis semanas de treino.
- Fichas de repeticao monotona.
- Checklist bilingue portugues/alemao.
- Rubrica semanal de legibilidade e paciencia.
- Copia de longe, ditado, frases escolares e matematica curta.
- Portfolio final, mensagem para escola e plano de manutencao.

## Edicao

Todo o layout esta em `index.html`. Para ajustar linhas, margens, fontes ou paginas, edite o CSS dentro da tag `<style>` e reabra o arquivo no navegador.
