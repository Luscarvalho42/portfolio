interface Profissao {
  cargo: string;
  periodo: string;
  local: {
    nome: string;
    site: string;
  };
  descricao: string;
  tags: string[];
}

export const listaProfissoes: Profissao[] = [
  {
    cargo: "Gestor de TI",
    periodo: "maio de 2023 - atualmente",
    local: {
      nome: "Prefeitura Municipal de Lavras",
      site: "https://www.lavras.mg.gov.br/",
    },
    descricao:
      "Atualmente estou trabalhando na Secretaria de Saúde, auxiliando na implementação da Saúde 5.0 no município de Lavras. Esse processo envolve a incorporação de novas tecnologias ao sistema de saúde pública.",
    tags: ["Gestão", "Infraestrutura", "Inovação tecnológica"],
  },
  {
    cargo: "Analista de sistemas - pleno",
    periodo: "novembro de 2022 - maio de 2023",
    local: {
      nome: "Vega Monitoramento",
      site: "https://vegamonitoramento.com.br/",
    },
    descricao:
      "Participei da implementação da versão 2.0 da plataforma Lyra e tive a oportunidade de atuar como mentor no projeto NAVE, uma iniciativa promovida pela Oi Futuro em parceria com a Vega.",
    tags: ["Mentoria", "Spring Boot", "Thymeleaf"],
  },
  {
    cargo: "Analista de sistemas - júnior",
    periodo: "dezembro de 2021 - novembro de 2022",
    local: {
      nome: "Vega Monitoramento",
      site: "https://vegamonitoramento.com.br/",
    },
    descricao:
      "Participei da implantação dos novos módulos da Plataforma Lyra, como o módulo de gerenciamento de usuário, entre outros.",
    tags: ["Keycloak", "PostgreSQL", "Leaflet"],
  },
  {
    cargo: "Analista de sistemas - estagiário",
    periodo: "agosto de 2021 - dezembro de 2021",
    local: {
      nome: "Vega Monitoramento",
      site: "https://vegamonitoramento.com.br/",
    },
    descricao:
      "Estive presente nas primeiras sprints da Plataforma Lyra, auxiliando no desenvolvimento da base do projeto.",
    tags: ["Vue.js", "Java", "JavaScript"],
  },
  {
    cargo: "Monitor da disciplina Fundamentos de Programação I",
    periodo: "fevereiro de 2021 - agosto de 2021",
    local: {
      nome: "Universidade Federal de Lavras",
      site: "https://ufla.br/",
    },
    descricao:
      "Fui responsável por criar e revisar materiais da disciplina, lecionada em Python, além de dar aulas de mentoria para os colegas do curso.",
    tags: ["Docência", "Mentoria", "Python"],
  },
];
