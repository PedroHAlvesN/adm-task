'use client'
import * as React from "react"
import { SetStateAction, useState, useRef, useEffect } from "react"
import { Search } from 'lucide-react'

interface NavbarProps {
  inputValueNavbar: string,
  setInputValueNavbar: React.Dispatch<SetStateAction<string>>;
}

export default function Navbar({ inputValueNavbar, setInputValueNavbar }: NavbarProps) {
    const searchInputRef = useRef<HTMLInputElement>(null)

    let [selected, setSelected] = useState("")
    let [ inputFocus, setInputFocus ] = useState(false)

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        const isModifierPressed = event.ctrlKey

        if (isModifierPressed && event.key.toLowerCase() === 'k') {
          event.preventDefault();
          searchInputRef.current && searchInputRef.current.focus()
        }
      }

      window.addEventListener('keydown', handleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

  return (
    <section slot="navbar" className="
        fixed left-[50%] translate-x-[-50%] max-h-[40px]
        bg-white w-fit gap-[8px] p-[12px] shadow-md
        shadow-[var(--strongest-blue)]/10
        rounded-full top-[11px] transition-all
        delay-100 duration-200 easy-in-out
        top-0 flex items-center justify-between"
      >
        <input ref={searchInputRef}
          placeholder={`${inputFocus
            ? "Digite o que quer pesquisar."
            : "Ctrl + K"}`}
          className="w-[65px] h-[24px]
          text-sm text-[var(--strongest-blue)]
          bg-[var(--alice-blue)] px-[8px] rounded-full transition-all
          delay-100 duration-200 ease-in-out outline-none
          focus:w-[300px]" onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={(e) => setInputValueNavbar(e.target.value)} />
        <Search size={15} strokeWidth={2} />
    </section>
  )
}