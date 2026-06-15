'use client'
import * as React from "react"
import { SetStateAction, useState } from "react";

interface NavbarProps {
  setSearchedNavbar: React.Dispatch<SetStateAction<string>>;
}

export default function Navbar({ setSearchedNavbar }: NavbarProps) {
    let [selected, setSelected] = useState("")

  return (
    <section slot="navbar" className="
        fixed left-[50%] translate-x-[-50%] max-h-[40px] bg-white
        w-fit gap-[25px] rounded-full
        p-4 shadow-md shadow-slate-500/20
        top-[11px] flex items-center justify-between"
      >
        <input />
    </section>
  )
}