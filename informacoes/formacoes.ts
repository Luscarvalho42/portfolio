interface Formacao {
  titulo: string;
  periodo: string;
  local: {
    nome: string;
    site: string;
  };
}

export const listaFormacoes: Formacao[] = [
  {
    titulo: "Engenharia de Software - Pós-graduação Lato Sensu",
    periodo: "junho de 2023 - atualmente",
    local: {
      nome: "FASUL Educacional",
      site: "https://www.fasuleducacional.edu.br/",
    },
  },
  {
    titulo: "Bacharelado em Ciência da Computação",
    periodo: "2018 - 2022",
    local: {
      nome: "Universidade Federal de Lavras",
      site: "https://ufla.br/",
    },
  },
  {
    titulo: "Certificação WordPress REST API",
    periodo: "julho de 2023",
    local: {
      nome: "Origamid",
      site: "https://www.origamid.com/curso/",
    },
  },
  {
    titulo: "Certificação React Completo",
    periodo: "junho de 2023",
    local: {
      nome: "Origamid",
      site: "https://www.origamid.com/curso/",
    },
  },
  {
    titulo: "Certificação Fundação Scrum - SFPC",
    periodo: "maio de 2023",
    local: {
      nome: "CertiProf",
      site: "https://certiprof.com/",
    },
  },
  {
    titulo: "Certificação Vue 2 Completo",
    periodo: "junho de 2023",
    local: {
      nome: "Origamid",
      site: "https://www.origamid.com/curso/",
    },
  },
];
