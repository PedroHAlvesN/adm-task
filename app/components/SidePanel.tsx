'use client'
import { 
  ListTodo, PanelLeftOpen,
  CalendarDays, SendToBack, ListChecks,
  PanelLeftClose, Calculator 
} from 'lucide-react'
import { pageLinkStyle, selectedPageLinkStyle } from "../styles/sidepanel/styles"
import { truncatedText } from "../styles/sidepanel/styles"
import { useEffect, useState } from "react"

export default function SidePanel() {
  let [pageSelected, setPageSelected] = useState(window.location.pathname)
  let [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    setPageSelected(window.location.pathname)
  }, [window.location.pathname])

  return (
    <section
      className="max-w-[160px]
      ml-[24px] flex
      text-gray-950
      flex-col gap-[8px]"
    >
      <div>
        <ListChecks size={24} strokeWidth={2} className="p-[4px] rounded-full
          text-white bg-linear-to-b from-[var(--strong-blue)]
          to-[var(--strongest-blue)] m-[19px_0_11px_10px]"
        />
        <button onClick={() => setSidePanelOpen(!sidePanelOpen)}>
          {
            sidePanelOpen == true
            ? ( <PanelLeftClose size={16} strokeWidth={2} /> )
            : ( <PanelLeftOpen size={16} strokeWidth={2} /> )
          }
        </button>
      </div>
      <a href="/" className={
        `
          ${pageLinkStyle}
          ${pageSelected == "/"
          && selectedPageLinkStyle}
          ${sidePanelOpen == true ? "w-full" : "w-fit"}
        `
      }>
        <ListTodo size={16} strokeWidth={2}/>
        <p className={`
          ${
            sidePanelOpen == true
            ? `${truncatedText} visible`
            : "hidden"
          }`}
          >Tarefas</p>
      </a>

      <a href="/calculator"
        className=
          {`
            ${pageLinkStyle}
            ${pageSelected == "calculator" && selectedPageLinkStyle}
            ${sidePanelOpen == true ? "w-full" : "w-fit"}
          `}
      >
        <Calculator size={16} strokeWidth={2}/>
        <p className={`
          ${
            sidePanelOpen == true
            ? `${truncatedText} visible`
            : "hidden"
          }`}
        >Calculadora</p>
      </a>

      <a href="#"
        className=
          {`
            ${pageLinkStyle}
            ${pageSelected == "calendar"
            && selectedPageLinkStyle}
            ${sidePanelOpen == true ? "w-full" : "w-fit"}
          `}
      >
        <CalendarDays size={16} strokeWidth={2}/>
        <p className={`
          ${
            sidePanelOpen == true
            ? `${truncatedText} visible`
            : "hidden"
          }`}
        >Calendário</p>
      </a>

      <a href="#" className={
        `
          ${pageLinkStyle}
          ${pageSelected == "transfer-diagram"
          && selectedPageLinkStyle}
          ${sidePanelOpen == true ? "w-full" : "w-fit"}
        `}>
        <SendToBack size={16} strokeWidth={2} className="min-w-[15px] min-h-[15px]"/>
        <p title="Mapa de transferência" className={`
          ${
            sidePanelOpen == true
            ? `${truncatedText} visible`
            : "hidden"
          }`}
        >Mapa de transferência</p>
      </a>
    </section>
  )
}