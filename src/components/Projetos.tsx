"use client";

import { CartaoProjeto } from "@/components/CartaoProjeto";
import { motion } from "framer-motion";
import { listaProjetos } from "../../informacoes/projetos";
import { GitHub } from "react-feather";
import { Titulo } from "./Titulo";
import { Botao } from "./Botao";

export default function Projetos() {
  const projetos = listaProjetos.map(
    ({ nome, imagem, repositorio, demo, tags, descricao }) => (
      <CartaoProjeto
        nome={nome}
        imagem={`/projetos${imagem}`}
        repositorio={repositorio}
        demo={demo}
        tags={tags}
        descricao={descricao}
        key={repositorio as string}
      />
    )
  );

  return (
    <motion.section
      id="projetos"
      className="max-w-screen-2xl min-h-screen p-4 flex flex-col justify-center itens-center gap-8 m-auto mb-20"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Titulo>Projetos 👨‍💻</Titulo>
      <div className="flex flex-wrap justify-center gap-4">{projetos}</div>
      <Botao
        target="_blank"
        href="https://github.com/Luscarvalho42"
        tipo="primario"
      >
        <GitHub />
        Mais projetos
      </Botao>
    </motion.section>
  );
}
