"use client";

import SobreMim from "@/components/SobreMim";
import Projetos from "@/components/Projetos";
import Carreira from "@/components/Carreira";

import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/components/Menu";
import BarraNavegacao from "@/components/BarraNavegacao";
import Realizacoes from "@/components/Realizacoes";

export default function Sobre() {
  return (
    <AnimatePresence>
      <div className="invisible sm:visible">
        <Menu />
      </div>
      <div className="visible sm:invisible">
        <BarraNavegacao />
      </div>
      <main className="bg-slate-200 text-zinc-900 dark:bg-slate-800 dark:text-zinc-200 overflow-x-hidden">
        <SobreMim />
        <Projetos />
        <Carreira />
        <Realizacoes />
      </main>
    </AnimatePresence>
  );
}
