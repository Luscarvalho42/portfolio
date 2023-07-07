"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "react-feather";
import { Botao } from "@/components/Botao";

export default function Menu() {
  return (
    <motion.header
      className="z-50 fixed flex items-center h-14 px-4 w-screen backdrop-blur-md bg-slate-500/50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl w-screen flex items-center justify-between m-auto">
        <div>
          <Botao href="/" tipo="simples">
            <ChevronLeft style={{ marginLeft: "-8px" }} />
            Voltar
          </Botao>
        </div>
        <div className="flex items-center gap-1">
          <Botao href="#sobre" tipo="simples">
            Sobre
          </Botao>
          <Botao href="#projetos" tipo="simples">
            Projetos
          </Botao>
          <Botao href="#carreira" tipo="simples">
            Carreira
          </Botao>
          <Botao href="#realizacoes" tipo="simples">
            Realizações
          </Botao>
          {/* <Botao href="#contato" tipo="simples">
            Contato
          </Botao> */}
        </div>
      </div>
    </motion.header>
  );
}
