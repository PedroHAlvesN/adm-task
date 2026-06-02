'use client'
import * as React from "react"

export default function Navbar() {
    let [selected, setSelected] = React.useState("")

  return (
    <section className="
        w-fit gap-[25px] rounded-t-lg rounded-br-lg
        h-12 p-4 bg-white shadow-md shadow-slate-500/20
        text-slate-800 sticky place-self-center top-[25px]
        flex items-center justify-between"
      >
        <button>filtro 1</button>
        <button>filtro 2</button>
        <button>filtro 3</button>
    </section>
  )
}