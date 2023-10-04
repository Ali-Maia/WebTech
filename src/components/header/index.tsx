"use client";

// import { Menu } from "lucide-react";
import Button from "../button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full text-[#151934]">
      <header className="h-24 max-w-7xl px-6 mx-auto">
        <nav className="flex justify-between items-center py-2 w-full">
          <div>
            <span className="text-3xl font-black">WebTech</span>
          </div>
          <div>
            <ul className="hidden md:flex gap-8 font-medium">
              <li className="hover:text-[#2e3e73] transition">
                <Link href="#servicos">Serviços</Link>
              </li>
              <li className="hover:text-[#2e3e73] transition">
                <Link href="#horarios">Horários</Link>
              </li>
              <li className="hover:text-[#2e3e73] transition">
                <Link href="#avaliacoes">Avaliações</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Link href="#contato" className="hidden md:block self-center">
              <Button>Contato</Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <div className="cursor-pointer" onClick={toggleMenu}>
              {/* <Menu /> */}
            </div>

            {isOpen ? (
              <div className="fixed top-0  right-0 bg-white w-full z-10 p-6 shadow-shadow">
                <div
                  className="absolute right-6 cursor-pointer"
                  onClick={toggleMenu}
                >
                  {/* <X /> */}
                </div>

                <ul
                  className="mt-8 space-y-4 flex flex-col items-center"
                  onClick={toggleMenu}
                >
                  <li>
                    <Link href="#servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="#horarios">Horários</Link>
                  </li>
                  <li>
                    <Link href="#avaliacoes">Avaliações</Link>
                  </li>
                  <li>
                    <Link href="#contato">
                      {/* <Button>Contato</Button> */}
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
