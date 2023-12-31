import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
