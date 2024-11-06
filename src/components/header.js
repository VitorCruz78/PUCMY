import Image from "next/image"
import Logo from "../assets/Logo.png"

export default function Header() {
    return (
        <header className="w-full h-full md:h-16 bg-white shadow-lg flex flex-col items-start justify-center px-6 sm:px-12 py-6 sm:py-0">
            <div className="w-full flex flex-col items-start md:flex md:flex-row md:items-center gap-6">
                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src={Logo} 
                        width={50} 
                        height={50}
                        alt="Logo PUCMY" 
                    />
                    <h1 className="text-3xl text-black font-bold">PucMy</h1>
                </div>
                <nav className="w-full flex flex-col items-start md:flex md:flex-row md:items-center justify-between sm:mx-12">
                    <ul className="w-full flex flex-col items-start md:flex md:flex-row md:items-center gap-4 text-defaultGreen font-semibold tracking-wide">
                        <li>Home</li>
                        <li>Categorias</li>
                    </ul>
                    <input 
                        className="w-[60%] border-[1.5px] border-defaultGreen rounded-full py-2 px-6 outline-none text-zinc-500 mt-4 sm:mt-0"
                        type="text" 
                        placeholder="Pesquise aqui..." 
                    />
                </nav>
            </div>
        </header>
    )
}