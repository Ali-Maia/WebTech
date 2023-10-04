"use client";

// import { Menu, X } from "lucide-react";
// import Logo from "./ui/logo";
// import Button from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.2, duration: 0.8 },
      }}
      className="w-full"
    >
      <header className="h-24 container mx-auto">
        <nav className="flex justify-between items-center py-2 w-full">
          {/* <Logo /> */}

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

          <div className="flex items-center justify-center">
            <Link href="#contato" className="hidden md:block self-center">
              {/* <Button>Contato</Button> */}
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
    </motion.div>
  );
}
