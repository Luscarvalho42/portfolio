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
            <BotaoRedeSocial
              href="https://www.linkedin.com/in/lucas-felizardo/"
              cor="bg-sky-500"
              title="/lucas-felizardo"
            >
              <Linkedin />
            </BotaoRedeSocial>
            <BotaoRedeSocial
              href="https://github.com/Luscarvalho42"
              cor="bg-neutral-500"
              title="/Luscarvalho42"
            >
              <GitHub />
            </BotaoRedeSocial>
            <BotaoRedeSocial
              href="mailto:lucasdec.felizardo@gmail.com"
              cor="bg-rose-300"
              title="lucasdec.felizardo@gmail.com"
            >
              <Mail />
            </BotaoRedeSocial>
            <BotaoRedeSocial
              href="https://api.whatsapp.com/send?phone=5535935059029&text=Oi!%20Vim%20atrav%C3%A9s%20do%20seu%20site%20%F0%9F%98%84"
              cor="bg-green-500"
              title="(35) 93505-9029"
            >
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
