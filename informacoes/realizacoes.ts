interface Realizacao {
  titulo: string;
  imagem: string;
  descricao: string;
}

export const listaRealizacoes: Realizacao[] = [
  {
    titulo: "Organizador Pint of Science",
    imagem: "/pint-of-science.webp",
    descricao:
      "Desde o ensino médio já participava do projeto de divulgação científica 'A Magia da Física', o qual realiza o Pint of Science, o maior evento de divulgação científica do mundo, em Lavras. Em 2023, tive a honra de ser organizador do evento, o primeiro presencial depois da pandemia.",
  },
  {
    titulo: "98 no TCC",
    imagem: "/tcc.webp",
    descricao:
      "No dia 16/12/2022, apresentei meu TCC, orientado pelo professor Janderson Rodrigo De Oliveira, para a professora Paula Christina Figueira Cardoso e para o professor Paulo Afonso Parreira Júnior e obtive a nota 98/100.",
  },
  {
    titulo: "Mentor no projeto NAVE",
    imagem: "/nave.webp",
    descricao:
      "Durante minha carreira na Vega, tive a oportunidade de ser mentor de cinco pessoas incríveis do projeto NAVE, oferecido pela Oi Futuro. Foi muito gratificante ver o crescimento deles até a efetivação de todos no final do projeto.",
  },
  {
    titulo: "Outros",
    imagem: "/outros.webp",
    descricao:
      "Desde pequeno sou o 'nerd' da turma, ganhando prêmios como o de melhor redação da cidade, conseguir bolsas de estudo em escolas particulares e por aí vai. Outra realização foi a de sair da casa dos meus pais sem precisar de apoio financeiro deles, fui fazendo um bico aqui e outro ali, sempre consegui me virar.",
  },
];
