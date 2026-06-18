"use client"
import "./globals.css";
import SidePanel from "./components/SidePanel"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"

interface TranslatedPageTitleType {
  [key: string]: string; 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const translatedPageTitle: TranslatedPageTitleType = {
    "/": "Tarefas",
    "calculator": "Calculadora",
    "calendar": "Calendário",
    "transfer-diagram": "Diagrama de transferência"
  }

  let [inputValueNavbar, setInputValueNavbar] = useState("");
  let [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(translatedPageTitle[window.location.pathname])
  }, [window.location.pathname])

  return (
    <html lang="en" title="Task Manager" className="w-full h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="w-full h-full flex
        bg-linear-to-br gap-[24px]
        from-[var(--baby-blue)]
        to-[var(--white)] relative"
      >
        <SidePanel />
        <div className="w-full h-full flex flex-col">
          <h1 className="flex
            items-center min-h-[62px]
            text-[var(--strongest-blue)]
            font-bold! text-2xl"
          >
            {pageTitle}
          </h1>
          <Navbar inputValueNavbar={inputValueNavbar}
            setInputValueNavbar={setInputValueNavbar}
          />
          <main className="w-full h-full">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
