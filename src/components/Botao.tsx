import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
  target?: string;
  href: string;
  tipo: "simples" | "normal" | "primario";
}

interface Estilo {
  [key: string]: string;
}

export const Botao: NextPage<Props> = ({ children, target, href, tipo }) => {
  const estilo: Estilo = {
    simples:
      "flex items-center gap-1 px-2 py-1 text-zinc-900 dark:text-zinc-200 ",
    normal:
      "flex items-center gap-1 px-2 py-1 rounded font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 dark:text-zinc-900 dark:bg-zinc-200 dark:hover:bg-zinc-300 ease-in-out duration-300",
    primario:
      "flex items-center justify-center py-2 px-8 rounded gap-4 font-bold text-zinc-200 bg-rose-600 m-auto drop-shadow-lg",
  };
  return tipo == "primario" ? (
    <Link href={href}>
      <motion.button
        whileHover={{ y: -3 }}
        transition={{ duration: 0.1 }}
        className={estilo.primario}
      >
        {children}
      </motion.button>
    </Link>
  ) : (
    <Link target={target || "_self"} href={href} className={estilo[tipo]}>
      {children}
    </Link>
  );
};
