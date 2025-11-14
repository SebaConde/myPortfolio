"use client";
import Image from "next/image";
import strapi from '../../../public/icons/strapi.svg'
import javascript from '../../../public/icons/javascript.svg'
import typescript from '../../../public/icons/typescript.svg'
import python from '../../../public/icons/python.svg'
import java from '../../../public/icons/java.svg'
import html5 from '../../../public/icons/html5.svg'
import css3 from '../../../public/icons/css3.svg'

import node from '../../../public/icons/node.svg'
import express from '../../../public/icons/express.svg'
import php from '../../../public/icons/php.svg'
import prisma from '../../../public/icons/prisma.svg'

import react from '../../../public/icons/react.svg'
import next from '../../../public/icons/nextjs.svg'
import vue from '../../../public/icons/vue.svg'
import vite from '../../../public/icons/vite.svg'
import tailwind from '../../../public/icons/tailwind.svg'
import bootstrap from '../../../public/icons/bootstrap.svg'

import mongodb from '../../../public/icons/mongodb.svg'
import postgre from '../../../public/icons/postgresql.svg'
import mysql from '../../../public/icons/mysql.svg'
import sqlServer from '../../../public/icons/sqlServer.svg'

import git from '../../../public/icons/git.svg'
import github from '../../../public/icons/github.svg'
import vercel from '../../../public/icons/vercel.svg'
import postman from '../../../public/icons/postman.svg'
import vscode from '../../../public/icons/vscode.svg'
import cursor from '../../../public/icons/cursor.svg'
import claude from '../../../public/icons/claude.svg'
import chatgpt from '../../../public/icons/chatgpt.svg'
import npm from '../../../public/icons/npm.svg'

import { BackgroundGradient } from "../ui/background-gradient";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function ExpandableStackCards() {
  const techCategories = [
  {
    tipo: "Lenguajes",
    tecnologias: [
      { nombre: "JavaScript", icon: javascript },
      { nombre: "TypeScript", icon: typescript },
      { nombre: "Python", icon: python },
      { nombre: "Java", icon: java },
      { nombre: "HTML5", icon: html5 },
      { nombre: "CSS3", icon: css3 },
    ],
  },
  {
    tipo: "Backend",
    tecnologias: [
      { nombre: "Node.js", icon: node },
      { nombre: "Express", icon: express },
      { nombre: "PHP", icon: php },
      { nombre: "Prisma", icon: prisma },
      { nombre: "Strapi", icon: strapi },
    ],
  },
  {
    tipo: "Frameworks",
    tecnologias: [
      { nombre: "React", icon: react },
      { nombre: "Next.js", icon: next },
      { nombre: "Vue", icon: vue },
      { nombre: "Vite", icon: vite },
      { nombre: "Tailwind", icon: tailwind },
      { nombre: "Bootstrap", icon: bootstrap },
    ],
  },
  {
    tipo: "Bases de datos",
    tecnologias: [
      { nombre: "MongoDB", icon: mongodb },
      { nombre: "MySQL", icon: mysql },
      { nombre: "PostgreSQL", icon: postgre },
      { nombre: "SQL Server", icon: sqlServer },
    ],
  },
  {
    tipo: "Herramientas",
    tecnologias: [
      { nombre: "Git", icon: git },
      { nombre: "GitHub", icon: github },
      { nombre: "Vercel", icon: vercel },
      { nombre: "VSCode", icon: vscode },
      { nombre: "Cursor", icon: cursor },
      { nombre: "NPM", icon: npm },
      { nombre: "OpenIA", icon: chatgpt },
      { nombre: "Claude", icon: claude },
      { nombre: "Postman", icon: postman },
    ],
  },
];

  return (
    <>
    <div className="flex flex-wrap gap-6 justify-center mt-4">
        {techCategories.map((cat) => (
        <BackgroundGradient key={cat.tipo} className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="border-0 w-80">
            <CardHeader>
            <CardTitle className="text-center text-3xl">{cat.tipo}</CardTitle>
                <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                    {cat.tecnologias.map((t) => (
                    <div key={t.nombre} className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-110">
                        <Image src={t.icon} height={60} width={60} alt={t.nombre} />
                        <span className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 font-bold select-none">{t.nombre}</span>
                    </div>
                    ))}
                </CardDescription>
            </CardHeader>
        </Card>
        </BackgroundGradient>
        ))}
    </div>     
    </>
  );
}



