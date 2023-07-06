interface Projeto {
  nome: string;
  imagem: string;
  repositorio: string;
  demo: string;
  descricao: string;
  tags: string[];
}

export const listaProjetos: Projeto[] = [
  {
    nome: "Validador de CPF/CNPJ",
    imagem: "/validador-cpf-cnpj.webp",
    repositorio: "https://github.com/Luscarvalho42/validador-gerador-cpf_cnpj",
    demo: "https://geradorcpfcnpj.site/",
    descricao:
      "Desenvolvido de forma simples para aprender sobre Google ADS e SEO.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    nome: "Quiz Avatar",
    imagem: "/quiz-avatar.webp",
    repositorio: "https://github.com/Luscarvalho42/quiz-avatar",
    demo: "https://quiz-avatar-luscarvalho42.vercel.app/",
    descricao: "Desenvolvido durante a Imersão React da Alura.",
    tags: ["React", "StyledComponents"],
  },
  {
    nome: "Jogo da cobrinha",
    imagem: "/jogo-da-cobrinha.webp",
    repositorio: "https://github.com/Luscarvalho42/jogo-da-cobrinha",
    demo: "https://luscarvalho42.github.io/jogo-da-cobrinha/",
    descricao:
      "Desenvolvido durante o bootcamp HTML Web Developer oferecido pela Digital Inovation One.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    nome: "Simulador de Batalhas Pokémon",
    imagem: "/batalhas-pokemon.webp",
    repositorio: "https://github.com/Luscarvalho42/trabalho-pratico-ES",
    demo: "",
    descricao:
      "Aplicação fullstack desenvolvida para a disciplina de Engenharia de Software.",
    tags: ["HTML", "PHP", "Materialize", "MySQL"],
  },
];
