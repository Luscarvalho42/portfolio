"use client";

import { CartaoProjeto } from "@/components/CartaoProjeto";
import { motion } from "framer-motion";
import { projetos } from "../../informacoes/projetos";
import { GitHub } from "react-feather";

export default function Projetos() {
  const { nome, imagem, repositorio, demo, tags, descricao } = projetos[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main className="max-w-screen-2xl p-4 flex flex-col justify-center m-auto gap-8">
        <h2 className="text-4xl font-bold my-16 text-center">Projetos 👨‍💻</h2>
        <section className="flex flex-wrap gap-4 justify-center">
          {projetos.map(
            ({ nome, imagem, repositorio, demo, tags, descricao }, index) => {
              return (
                <CartaoProjeto
                  nome={nome}
                  imagem={`/projetos${imagem}`}
                  repositorio={repositorio}
                  demo={demo}
                  tags={tags}
                >
                  {descricao}
                </CartaoProjeto>
              );
            }
          )}
        </section>
        <a
          target="_blank"
          href="https://github.com/Luscarvalho42"
          className="flex w-40 items-center justify-center py-2 rounded gap-4 font-bold text-zinc-200 dark:text-zinc-800 bg-rose-600 m-auto hover:bg-rose-800"
        >
          <GitHub /> <p>Mais projetos</p>
        </a>
      </main>
    </motion.section>
  );
}
