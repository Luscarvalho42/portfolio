import { NextPage } from "next";
import { ReactNode } from "react";

export const Titulo: NextPage<{
  children?: ReactNode;
}> = ({ children }) => {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
};
