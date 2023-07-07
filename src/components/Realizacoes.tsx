"use client";

import { motion } from "framer-motion";
import { Titulo } from "./Titulo";
import { listaRealizacoes } from "../../informacoes/realizacoes";
import Image from "next/image";

export default function Realizacoes() {
  const realizacoes = listaRealizacoes.map(
    ({ titulo, imagem, descricao }, index) => (
      <div className="flex flex-col items-center mb-10" key={titulo + index}>
        <div className="w-80 h-48 overflow-hidden flex items-center justify-center rounded mb-2">
          <Image
            src={"/realizacoes" + imagem}
            alt={titulo}
            layout="responsive"
            objectFit="contain"
            width={320}
            height={192}
          />
        </div>
        <h3 className="font-bold text-lg sm:mt-0 mb-1">{titulo}</h3>
        <p className="w-[300px] text-sm indent-8 hyphens-auto">{descricao}</p>
      </div>
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
      <Titulo>Realizações 🤩</Titulo>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {realizacoes}
      </div>
    </motion.section>
  );
}
