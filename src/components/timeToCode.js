import Image from "next/image";
import ImageCode from "../assets/image_timeToCode.png"

export default function TimeToCode() {
    return (
        <div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <h1 className="w-full text-black text-3xl font-semibold tracking-wide">Pratique</h1>
                <span className="w-full h-[2px] bg-defaultBlue"></span>
            </div>
            <div className="w-full h-80 rounded-lg shadow-lg bg-[#F4F4F4] mt-6">
                <div className="w-full h-full flex flex-row">
                    <Image 
                        src={ImageCode}
                        width={500}
                        height={500}
                        alt="Imagem animada representando programação"
                        className="w-1/2 h-full"
                    />
                    <div className="w-1/2 h-full p-6 flex flex-col items-start justify-between">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <h2 className="text-black text-2xl tracking-wide font-bold">Hora de codar</h2>
                            <p className="text-black text-base tracking-wide">Parabéns você concluiu com êxito esse aprendizado!</p>
                            <p className="text-black text-base tracking-wide font-bold">Chegou a hora de Praticar! 😀</p>
                        </div>
                        <button className="
                            w-full flex flex-col items-center justify-center text-xl text-white font-bold
                            bg-gradient-to-r from-defaultTurq to-defaultBlue rounded-full p-4 mt-4
                        ">
                            Exercícios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
