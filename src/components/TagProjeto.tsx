import { NextPage } from "next";

interface Tag {
  valor: string;
}

interface Cor {
  [key: string]: string;
}

export const TagProjeto: NextPage<Tag> = ({ valor }) => {
  const cor: Cor = {
    HTML: "text-white bg-orange-500",
    CSS: "text-white bg-blue-500",
    JavaScript: "text-black bg-yellow-400",
    React: "text-white bg-blue-400",
    StyledComponents: "text-white bg-pink-400",
    PHP: "text-white bg-indigo-600",
    Materialize: "text-white bg-rose-400",
    MySQL: "text-white bg-amber-400",
  };

  return (
    <main className={cor[valor] + " rounded px-2 text-sm"}>
      <h1>{valor}</h1>
    </main>
  );
};
