import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
  cor?: string;
  href: string;
}

export const BotaoRedeSocial: NextPage<Props> = ({ children, cor, href }) => {
  return (
    <Link href={href} target="_blank">
      <motion.button
        whileHover={{ y: -3 }}
        transition={{ duration: 0.1 }}
        className={"rounded-full p-2 " + cor}
      >
        {children}
      </motion.button>
    </Link>
  );
};
