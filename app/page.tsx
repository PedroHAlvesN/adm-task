'use client'

import { useState } from "react"
import Navbar from "./components/Navbar"

export default function Home() {
  let [inputValueNavbar, setInputValueNavbar] = useState("")

  return (
    <section className="flex flex-col h-full">
      <Navbar inputValueNavbar={inputValueNavbar}
        setInputValueNavbar={setInputValueNavbar} />
      <div
        className="flex flex-col h-full rounded-xl m-[0_24px_8px_0]
        shadow-[0_0_15px_var(--strong-blue)]/10
        bg-[var(--alice-blue)]"
      >
      </div>
    </section>
  )
}
