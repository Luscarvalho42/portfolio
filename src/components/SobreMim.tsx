"use client";

import imgSobreMim from "../../public/sobre-mim.jpeg";

import { motion, AnimatePresence } from "framer-motion";

export default function SobreMin() {
  return (
    <AnimatePresence>
      <motion.section
        className="h-screen w-screen flex items-center justify-center md:text-lg"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main className="max-w-7xl flex gap-4 flex-col md:flex-row items-center justify-evenly p-4">
          <motion.div
            className="w-72 h-72 md:w-96 md:h-96"
            style={{
              backgroundImage: `url(${imgSobreMim.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            animate={{
              borderRadius: [
                "75% 80% 65% 95%",
                "90% 65% 90% 75%",
                "65% 75% 75% 60%",
                "90% 95% 95% 85%",
                "75% 80% 65% 95%",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          ></motion.div>
          <div className="indent-8 hyphens-auto md:w-1/2" lang="pt-br">
            <p>
              Oi! Eu sou o Lucas 👋, um desenvolvedor apaixonado por programar e
              ensinar pessoas a programarem.
            </p>
            <p>
              Já me aventurei pela fotografia, manutenção de computadores,
              gestão, entre outras coisas. Porém, o que gosto mesmo é de passar
              horas programando.
            </p>
          </div>
        </main>
      </motion.section>
    </AnimatePresence>
  );
}
