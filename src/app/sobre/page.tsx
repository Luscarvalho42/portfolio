"use client";

import SobreMim from "@/components/SobreMim";
import Link from "next/link";
import { ChevronLeft } from "react-feather";

import { motion, AnimatePresence } from "framer-motion";
import Projetos from "@/components/Projetos";
export default function Sobre() {
  return (
    <AnimatePresence>
      <motion.header
        className="z-50 fixed flex items-center px-4 h-14 w-screen bg-slate-300 dark:bg-slate-900"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/">
          <button className="flex items-center gap-1 rounded border-2 border-zinc-900  text-zinc-900 dark:text-zinc-200 dark:border-zinc-200  px-2 py-1">
            <ChevronLeft style={{ marginLeft: "-8px" }} />
            Voltar
          </button>
        </Link>
      </motion.header>
      <main className="bg-slate-200 text-zinc-900 dark:bg-slate-800 dark:text-zinc-200 overflow-x-hidden">
        <SobreMim />
        <Projetos />
      </main>
    </AnimatePresence>
  );
}
