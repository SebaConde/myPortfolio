import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "../components/shared/LenisProvider";
import { Analytics } from "@vercel/analytics/next"


const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastián Conde - Portfolio",
  description: "Full Stack Developer especializado en React, Next.js, Node.js y TypeScript. Desarrollo aplicaciones web modernas, escalables y orientadas a resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        precedence="default"
      />
      <body
        className={`${urbanist.className} antialiased bg-zinc-950 text-white`}
      >
        <LenisProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
