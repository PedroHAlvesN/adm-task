'use client'
import Navbar from "./components/Navbar"

export default function Home() {
  const translatedPageTitle = {
    "/": "Tarefas",
    "calculator": "Calculadora",
    "calendar": "Calendário",
    "transfer-diagram": "Diagrama de transferência"
  }

  return (
    <section className="flex flex-col h-full">
      <h1 className="flex items-center min-h-[62px] text-2xl text-[var(--strongest-blue)] font-bold!">
        {translatedPageTitle[window.location.pathname]}
      </h1>
      <div
        className="flex relative flex-col 
          h-full rounded-xl m-[0_24px_8px_0]
          shadow-[0_0_15px_var(--strong-blue)]/10
          bg-[var(--alice-blue)]"
      >
        <Navbar />
      </div>
    </section>
    
  )
}
