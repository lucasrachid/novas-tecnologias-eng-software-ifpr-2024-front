import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novas Tecnologias Engenharia Software 2024",
  description: "Novas Tecnologias Engenharia Software 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
