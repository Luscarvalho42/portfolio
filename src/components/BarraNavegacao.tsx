"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  Code,
  PhoneOutgoing,
  Star,
  TrendingUp,
  User,
} from "react-feather";
import { Botao } from "@/components/Botao";

export default function BarraNavegacao() {
  return (
    <motion.header
      className="z-50 fixed bottom-0 flex items-center p-1 w-screen"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-screen flex h-12 rounded items-center justify-evenly backdrop-blur-md bg-slate-400/50 dark:bg-slate-500/50">
        <div className="flex items-center gap-1 mt-1">
          <Botao href="#sobre" tipo="simples">
            <div className="flex flex-col items-center">
              <User />
              <p className="text-sm font-thin">Sobre</p>
            </div>
          </Botao>
          <Botao href="#projetos" tipo="simples">
            <div className="flex flex-col items-center">
              <Code />
              <p className="text-sm font-thin">Projetos</p>
            </div>
          </Botao>
          <Botao href="#carreira" tipo="simples">
            <div className="flex flex-col items-center">
              <TrendingUp />
              <p className="text-sm font-thin">Carreira</p>
            </div>
          </Botao>
          <Botao href="#realizacoes" tipo="simples">
            <div className="flex flex-col items-center">
              <Star />
              <p className="text-sm font-thin">Realizações</p>
            </div>
          </Botao>
          {/* <Botao href="#contato" tipo="simples">
            <div className="flex flex-col items-center">
              <PhoneOutgoing />
              <p className="text-sm font-thin">Contato</p>
            </div>
          </Botao> */}
        </div>
      </div>
    </motion.header>
  );
}
