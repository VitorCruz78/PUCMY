import Image from "next/image"
import Link from "next/link"
import CardEstrutura from "../assets/cards/card-estrutura-c.jpg"
export default function CardExercises({title, picture, link}){
    return(
        <div className="bg-white w-[350px] sm:w-[450px] h-[100px] md:w-[650px] md:h-[130px] flex flex-row items-center justify-between rounded-xl">
                <Image 
                    className="h-full w-[250px] md:w-[450px] rounded-tl-xl rounded-bl-xl"
                    src={picture}
                    width={200}
                    height={200}
                />
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <h1 className="text-sm md:text-lg font-semibold flex flex-row items-center justify-center md:flex md:flex-row md:justify-center md:items-center w-full">{title}</h1>
                    <div className="bg-[#D9D9D9] w-[100px] h-4 md:w-[150px] md:h-10 flex flex-row justify-center items-center rounded-full hover:bg-[#b9b9b9]">
                        <Link href={`${link}`} className="text-sm md:text-lg">Exercício</Link>
                    </div>
                </div>
            </div>
    )
}