'use client'
import * as React from "react"
import { ListTodo } from 'lucide-react'
import { CalendarDays } from 'lucide-react'
import { Calculator } from 'lucide-react'
import { pageLinkStyle, selectedPageLinkStyle, Title } from "../styles/sidepanel/styles"
import { truncatedText } from "../styles/sidepanel/styles"
import { SendToBack } from 'lucide-react'
import { useEffect, useState } from "react"

export default function SidePanel() {
  let [pageSelected, setPageSelected] = useState(window.location.pathname)

  useEffect(() => {
    setPageSelected(window.location.pathname)
  }, [window.location.pathname])

  return (
    <section
      className="max-w-[160px]
      ml-[8px] flex
      text-gray-950
      flex-col gap-[8px]"
    >

      <h1 className={Title}>Task Manager</h1>
      <a href="/" className={`${pageLinkStyle} ${pageSelected == "/" && selectedPageLinkStyle}`}>
        <ListTodo size={15} strokeWidth={2}/>
        <p className={truncatedText}>Tarefas</p>
      </a>
      <a href="#" className={`${pageLinkStyle} ${pageSelected == "calculator" && selectedPageLinkStyle}`}>
        <Calculator size={15} strokeWidth={2}/>
        <p className={truncatedText}>Calculadora</p>
      </a>
      <a href="#" className={`${pageLinkStyle} ${pageSelected == "calendar" && selectedPageLinkStyle}`}>
        <CalendarDays size={15} strokeWidth={2}/>
        <p className={truncatedText}>Calendário</p>
      </a>
      <a href="#" className={`${pageLinkStyle} ${pageSelected == "transfer-diagram" && selectedPageLinkStyle}`}>
        <SendToBack size={15} strokeWidth={2} className="min-w-[15px] min-h-[15px]"/>
        <p className={truncatedText} title="Mapa de transferência">Diagrama de transferência</p>
      </a>
    </section>
  )
}