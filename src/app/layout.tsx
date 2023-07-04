import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas de Carvalho Felizardo",
  description: "Saiba um pouco sobre mim!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-600 text-zinc-900">{children}</body>
    </html>
  );
}
