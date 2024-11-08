import Image from "next/image"
import Link from "next/link"
import CardEstrutura from "../assets/cards/card-estrutura-c.jpg"
export default function CardExercises({title, picture, link}){
    return(
        <div className="bg-white w-[650px] h-[130px] flex flex-row items-center justify-between rounded-xl">
                <Image 
                    className="h-full w-[450px] rounded-tl-xl rounded-bl-xl"
                    src={picture}
                    width={200}
                    height={200}
                />
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <h1 className="text-lg font-semibold flex flex-row justify-center items-center w-full">{title}</h1>
                    <div className="bg-[#D9D9D9] w-[150px] h-10 flex flex-row justify-center items-center rounded-full hover:bg-[#b9b9b9]">
                        <Link href={`${link ? link : '/'}`} className="text-lg">Exercício</Link>
                    </div>
                </div>
            </div>
    )
}