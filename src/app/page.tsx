"use client";
import Link from "next/link";
import imgInicial from "../../public/inicial.png";
import imgRuido from "../../public/ruido.svg";

import { motion, AnimatePresence } from "framer-motion";

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
          className="flex gap-8 sm:mt-8"
        >
          <Link href="/sobre">
            <button className="rounded border-2 border-rose-600 text-rose-600 font-medium px-2 py-1 hover:bg-rose-600 hover:text-white duration-300">
              Sobre mim
            </button>
          </Link>
          <Link href="/contato">
            <motion.button
              whileHover={{ y: -3 }}
              transition={{ duration: 0.1 }}
              className="rounded border-2rounded border-2 border-rose-600 text-white bg-rose-600 font-medium px-2 py-1 drop-shadow-md duration-300 hover:drop-shadow-xl hover:bg-rose-500 hover:border-rose-500 "
            >
              Entre em contato
            </motion.button>
          </Link>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}
