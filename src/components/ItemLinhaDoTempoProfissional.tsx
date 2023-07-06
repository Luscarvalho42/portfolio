import { TagLinhaDoTempo } from "./TagLinhaDoTempo";
import { Titulo } from "./Titulo";
import { NextPage } from "next";

interface Props {
  cargo: string;
  periodo: string;
  local: {
    nome: string;
    site: string;
  };
  descricao: string;
  tags: string[];
  ultimo: boolean;
}

export const ItemLinhaDoTempoProfissional: NextPage<Props> = ({
  cargo,
  periodo,
  local,
  descricao,
  tags,
  ultimo,
}) => {
  const habilidades = tags.map((tag, index) => (
    <TagLinhaDoTempo valor={tag} key={tag + index} />
  ));

  return (
    <li className="relative flex items-baseline gap-6 pb-6">
      <div
        className={
          ultimo
            ? ""
            : "before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="bi bi-circle-fill fill-gray-400"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div>
        <div>
          <p className="font-bold text-lg">{cargo}</p>
          <p className="text-sm">{local.nome}</p>
          <p className="font-thin text-sm">{periodo}</p>
          <p className="mt-3">{descricao}</p>
          <div className="flex flex-wrap gap-1 items-start pt-1">
            {habilidades}
          </div>
        </div>
      </div>
    </li>
  );
};
