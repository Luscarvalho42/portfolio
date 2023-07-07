"use client";
import imgInicial from "../../public/inicial.png";
import imgRuido from "../../public/ruido.svg";
import imgWhatsapp from "../../public/whatsapp.svg";

import { motion, AnimatePresence } from "framer-motion";
import { Botao } from "@/components/Botao";
import BotaoBaixarPDF from "@/components/BotaoBaixarPDF";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import { BotaoRedeSocial } from "@/components/BotaoRedeSocial";
import Image from "next/image";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.main
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${imgRuido.src}), url(${imgInicial.src})`,
          backgroundSize: "auto, auto, contain",
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "left bottom",
        }}
        className="w-screen h-screen flex flex-col items-center justify-around sm:justify-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h1 className="font-black text-4xl sm:text-6xl">
            Lucas de Carvalho Felizardo
          </h1>
          <h2 className="font-bold text-rose-600 text-2xl sm:text-3xl">
            Desenvolvedor Full Stack
          </h2>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col gap-8 sm:mt-8"
        >
          <div className="flex gap-8 items-center justify-center">
            <BotaoRedeSocial href="https://google.com" cor="bg-sky-500">
              <Linkedin />
            </BotaoRedeSocial>
            <BotaoRedeSocial href="" cor="bg-neutral-500">
              <GitHub />
            </BotaoRedeSocial>
            <BotaoRedeSocial href="" cor="bg-rose-300">
              <Mail />
            </BotaoRedeSocial>
            <BotaoRedeSocial href="" cor="bg-green-500">
              <Image
                src={imgWhatsapp.src}
                width={24}
                height={24}
                alt="Logo whatsapp"
              />
            </BotaoRedeSocial>
          </div>
          <div className="flex items-center gap-4">
            <BotaoBaixarPDF />
            <Botao href="/sobre" tipo="primario">
              Sobre mim
            </Botao>
          </div>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}
