'use client'

import SidePanel from "./components/SidePanel"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex flex-row w-full h-full">
      <SidePanel />
      <div className="flex flex-col w-full h-full">
        <h1>{
              window.location.pathname == "/"
                ? "Tarefas"
                : window.location.pathname == "calculator"
                ? "Calculadora"
                : window.location.pathname == "calendar"
                ? "Calendário"
                : window.location.pathname == "transfer-diagram"
                && "Diagrama de transferência"
            }
        </h1>
        <section
          className="flex relative
            flex-col bg-slate-200 w-full
            rounded-lg m-[8px] shadow-md
            shadow-slate-500/20"
        >
          <Navbar />
        </section>
      </div>
    </main>
  )
}
