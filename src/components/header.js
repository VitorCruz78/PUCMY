import Image from "next/image"
import Logo from "../assets/Logo.png"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-full md:h-16 bg-white shadow-lg flex flex-col items-center justify-center">
            <div className="w-full max-w-[1150px] flex flex-col items-start md:flex md:flex-row md:items-center md:justify-between gap-6 px-12 sm:px-0 py-6 sm:py-0">
                <div className="w-full flex flex-row items-center gap-4">
                    <Image 
                        src={Logo} 
                        width={50} 
                        height={50}
                        alt="Logo PUCMY" 
                    />
                    <h1 className="text-2xl text-black font-semibold">PucMy</h1>
                </div>
                <nav>
                    <ul className="w-full flex flex-col items-start md:flex md:flex-row md:items-center gap-4 text-defaultBlue font-medium tracking-wide">
                        <li><Link href={'/'}>Home</Link></li>
                        <li>Aprendizado</li>
                        <li>Exercícios</li>
                        <li>Quiz</li>
                    </ul>
                    {/* <input 
                        className="w-full border-[1.5px] border-defaultBlue/50 rounded-full py-2 px-6 outline-none text-zinc-500 mt-4 sm:mt-0"
                        type="text" 
                        placeholder="Pesquise aqui..." 
                    /> */}
                </nav>
            </div>
        </header>
    )
}
