import { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { TagProjeto } from "./TagProjeto";
import { Botao } from "./Botao";

interface Projeto {
  nome: string;
  imagem: string;
  repositorio: string;
  demo: string;
  descricao: string;
  tags: string[];
}

export const CartaoProjeto: NextPage<Projeto> = ({
  nome,
  imagem,
  repositorio,
  demo,
  tags,
  descricao,
}) => {
  return (
    <main className="rounded-lg border-2 p-4 self-stretch border-zinc-900 dark:border-zinc-200">
      <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row">
        <Image
          alt="Print da tela do projeto"
          src={imagem as string}
          height={200}
          width={288}
          className="rounded"
        />

        <div className="w-72 sm:w-72 flex flex-col justify-between">
          <h3 className="font-bold text-lg sm:mt-0">{nome}</h3>
          <div className="flex gap-2">
            {tags?.sort().map((tag, index) => (
              <TagProjeto valor={tag} key={`${index}_${tag}`} />
            ))}
          </div>
          <p className="my-2">{descricao}</p>
          <div className="flex justify-between">
            {demo ? (
              <Botao href={demo} target="_blank" tipo="normal">
                Domonstração
              </Botao>
            ) : null}
            {repositorio ? (
              <Botao href={repositorio} target="_blank" tipo="normal">
                Repositório
              </Botao>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};
