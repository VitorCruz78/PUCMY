import Image from "next/image"
import Logo from "../assets/Logo.png"
import Link from "next/link"
import { useCompilerContext } from "@/context/useCompilerContext"
import { FaAngleDown } from "react-icons/fa"
import { useState } from "react"

export default function Header() {
    const { setOpenCompiler } = useCompilerContext()
    const [openQuiz, setOpenQuiz] = useState(false)

    return (
        <header className="w-full h-full md:h-16 bg-white shadow-lg flex flex-col items-center justify-center">
            <div className="w-full max-w-[1050px] flex flex-col items-start md:flex md:flex-row md:items-center md:justify-between gap-6 px-12 sm:px-0 py-6 sm:py-0">
                <div className="w-1/3 flex flex-row items-center gap-4">
                    <Image 
                        src={Logo} 
                        width={50} 
                        height={50}
                        alt="Logo PUCMY" 
                    />
                    <h1 className="text-2xl text-black font-semibold">ProgMy</h1>
                </div>
                <nav className="w-1/3">
                    <ul className="w-full flex flex-col items-start md:flex md:flex-row md:items-center gap-4 text-defaultBlue font-medium tracking-wide">
                        <li><Link href={'/'}>Home</Link></li>
                        {/* <li>Aprendizado</li>
                        <li>Exercícios</li> */}
                        <div className="w-full flex flex-col items-start justify-start relative">
                            <li onClick={() => setOpenQuiz(!openQuiz)} className="flex flex-row items-center gap-2 cursor-pointer">
                                <p>Quiz</p>
                                <FaAngleDown size={16} className={`${openQuiz ? "rotate-180" : "rotate-0"}`} />
                            </li>
                            {
                                openQuiz &&
                                    <div className="w-[16rem] h-[14rem] fixed bg-white p-6 rounded-lg translate-y-8">
                                        <ul className="space-y-4">
                                            <li className="text-black text-sm font-semibold"><Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UOVdDSzFNRjU2Mk1JTkVQQlE4Q0tTRVVSWS4u&route=shorturl"} target="_blank">Introdução a Programação</Link></li>
                                            <li className="text-black text-sm font-semibold"><Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UMUpKUEVYQUJIUFRSVktWQ1dIV0E0TlFNVi4u&route=shorturl"} target="_blank">Estrutura C</Link></li>
                                            <li className="text-black text-sm font-semibold"><Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UNzBRNU40WjVZSzNJU003VU5MSDEzTEc5SS4u&route=shorturl"} target="_blank">Estruturas condicionais</Link></li>
                                            <li className="text-black text-sm font-semibold"><Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UOVcyQjlBSDBZN0s1RUJMOFA5TVRZUDk0NC4u&route=shorturl"} target="_blank">Estruturas de repetição</Link></li>
                                            <li className="text-black text-sm font-semibold"><Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UODMzT0pVTlVUSklBUUFDOThCU05GOEMwOS4u&route=shorturl"} target="_blank">Operadores Lógicos</Link></li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </ul>
                </nav>
                <div className="w-full md:w-1/3 flex flex-row items-center justify-start md:justify-end">
                    <button 
                        onClick={() => setOpenCompiler(true)} 
                        className="text-sm text-white text-center rounded-full bg-defaultOrange p-2 px-6"
                    >
                        Editor de Códigos
                    </button>
                </div>
            </div>
        </header>
    )
}
