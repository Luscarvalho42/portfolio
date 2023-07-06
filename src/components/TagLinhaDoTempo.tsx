import { NextPage } from "next";

export const TagLinhaDoTempo: NextPage<{
  valor: string;
}> = ({ valor }) => {
  return <p className="text-sm bg-zinc-400 px-1 rounded">{valor}</p>;
};
