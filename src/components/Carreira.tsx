import { Titulo } from "./Titulo";
import { listaProfissoes } from "../../informacoes/profissoes";
import { ItemLinhaDoTempoProfissional } from "./ItemLinhaDoTempoProfissional";
import { listaFormacoes } from "../../informacoes/formacoes";
import { ItemLinhaDoTempoAcademica } from "./ItemLinhaDoTempoAcademica";

export default function Carreira() {
  const profissoes = listaProfissoes.map(
    ({ cargo, periodo, local, descricao, tags }, index) => (
      <ItemLinhaDoTempoProfissional
        cargo={cargo}
        periodo={periodo}
        local={local}
        tags={tags}
        descricao={descricao}
        ultimo={index + 1 == listaProfissoes.length}
        key={descricao}
      />
    )
  );

  const formacoes = listaFormacoes.map(({ titulo, periodo, local }, index) => (
    <ItemLinhaDoTempoAcademica
      titulo={titulo}
      periodo={periodo}
      local={local}
      ultimo={index + 1 == listaFormacoes.length}
      key={titulo + index}
    />
  ));

  return (
    <section id="carreira">
      <Titulo>Carreira 👨‍🎓</Titulo>
      <div className="max-w-screen-2xl min-h-screen p-4 flex flex-col justify-evenly itens-center gap-8 m-auto mt-8 md:flex-row flex-wrap">
        <div className="max-w-md">
          <p className="text-2xl mb-4">Profissional</p>
          <ul className="max-w-md">{profissoes}</ul>
          <p className="font-thin text-sm">
            Antes e durante minha jornada formal de trabalho, já fiz alguns
            bicos/freelas como fotógrafo, técnico de informática, designer
            gráfico, professor particular, servente de pedreiro e por aí vai...
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-2xl mb-4">Acadêmica</p>
          <ul>{formacoes}</ul>
          <p className="font-thin text-sm">
            Também, quando mais novo, já fiz cursos relacionado a informática,
            designe gráfico e manutenção de computadores.
          </p>
        </div>
      </div>
    </section>
  );
}
