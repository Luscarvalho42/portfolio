import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
  cor?: string;
  href: string;
  title?: string;
}

export const BotaoRedeSocial: NextPage<Props> = ({
  children,
  cor,
  href,
  title,
}) => {
  return (
    <Link href={href} target="_blank">
      <motion.button
        whileHover={{ y: -3 }}
        transition={{ duration: 0.1 }}
        className={"rounded-full p-2 " + cor}
        title={title}
      >
        {children}
      </motion.button>
    </Link>
  );
};
