import { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { TagProjeto } from "./TagProjeto";

interface Projeto {
  nome?: String;
  imagem?: String | "";
  repositorio?: String;
  demo?: String;
  children?: ReactNode;
  tags?: String[];
}

export const CartaoProjeto: NextPage<Projeto> = ({
  nome,
  imagem,
  repositorio,
  demo,
  tags,
  children,
}) => {
  return (
    <main className="rounded-lg border-2 p-4 self-stretch border-zinc-900 dark:border-zinc-200">
      <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row">
        <Image src={imagem} height={200} width={288} className="rounded" />

        <div className="w-72 sm:w-72 flex flex-col justify-between">
          <h3 className="text-xl mt-2 font-bold sm:mt-0">{nome}</h3>
          <div className="flex gap-2">
            {tags?.sort().map((tag, index) => (
              <TagProjeto valor={tag} key={`${index}_${tag}`} />
            ))}
          </div>
          <p className="my-2">{children}</p>
          <div className="flex justify-between">
            {demo ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-2 py-1 font-medium ease-in-out duration-300 bg-slate-800 hover:bg-slate-700 text-zinc-200 dark:bg-slate-200 dark:hover:bg-slate-400 dark:text-zinc-800"
              >
                Domonstração
              </a>
            ) : null}
            {repositorio ? (
              <a
                href={repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-2 py-1 font-medium ease-in-out duration-300 bg-slate-800 hover:bg-slate-700 text-zinc-200 dark:bg-slate-200 dark:hover:bg-slate-400 dark:text-zinc-800"
              >
                Repositório
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};
