import { TagLinhaDoTempo } from "./TagLinhaDoTempo";
import { NextPage } from "next";

interface Props {
  titulo: string;
  periodo: string;
  local: {
    nome: string;
    site: string;
  };
  ultimo: boolean;
}

export const ItemLinhaDoTempoAcademica: NextPage<Props> = ({
  titulo,
  periodo,
  local,
  ultimo,
}) => {
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
          <p className="font-bold text-lg">{titulo}</p>
          <p className="text-sm">{local.nome}</p>
          <p className="font-thin text-sm">{periodo}</p>
        </div>
      </div>
    </li>
  );
};
