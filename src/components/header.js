import Image from "next/image"
import Logo from "../assets/Logo.png"
import Link from "next/link"
import { useCompilerContext } from "@/context/useCompilerContext"

export default function Header() {
    const { setOpenCompiler } = useCompilerContext()

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
                    <h1 className="text-2xl text-black font-semibold">PucMy</h1>
                </div>
                <nav className="w-1/3">
                    <ul className="w-full flex flex-col items-start md:flex md:flex-row md:items-center gap-4 text-defaultBlue font-medium tracking-wide">
                        <li><Link href={'/'}>Home</Link></li>
                        <li>Aprendizado</li>
                        <li>Exercícios</li>
                        <li>Quiz</li>
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
