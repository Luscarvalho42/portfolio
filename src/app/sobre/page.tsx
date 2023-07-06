"use client";

import SobreMim from "@/components/SobreMim";
import Projetos from "@/components/Projetos";
import Carreira from "@/components/Carreira";

import { ChevronLeft } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Botao } from "@/components/Botao";

export default function Sobre() {
  return (
    <AnimatePresence>
      <motion.header
        className="z-50 fixed flex items-center px-4 h-14 w-screen bg-slate-300 dark:bg-slate-900"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Botao href="/" tipo="simples">
          <ChevronLeft style={{ marginLeft: "-8px" }} />
          Voltar
        </Botao>
      </motion.header>
      <main className="bg-slate-200 text-zinc-900 dark:bg-slate-800 dark:text-zinc-200 overflow-x-hidden">
        <SobreMim />
        <Projetos />
        <Carreira />
      </main>
    </AnimatePresence>
  );
}
