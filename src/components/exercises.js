import CardEstrutura from "../assets/cards/card-estrutura-c.jpg"
import CardRepeticao from "../assets/cards/card-estrutura-repticao.jpg"
import CardExpressao from "../assets/cards/card-expressoes-condicionais.jpg"
import CardIntro from "../assets/cards/card-introducao.jpg"
import CardCond from "../assets/cards/card-operadores-expressoes.jpg"
import CardExercises from "@/components/cardExercises";
import Image from "next/image"
import Link from "next/link"

const cardOptions = [
    { title: "Introdução", picture: CardIntro, link: "../posts/introducao" }, 
    { title: "Estrutura em C", picture: CardEstrutura, link: "../posts/estrutura_c" }, 
    { title: "Expressões Condicionais", picture: CardCond }, 
    { title: "Estrutura de Repetição", picture: CardRepeticao }, 
    { title: "Operadores e Expressões", picture: CardExpressao}, 
  ]
export default function Exercises(){
    return(
        <div className="bg-defaultBlue w-full h-[830px] md:h-[780px] flex flex-col items-center gap-20 p-6 md:p-16">
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <h1 className="w-full text-white text-5xl font-semibold tracking-wide">Exercícios</h1>
                <span className="w-full h-[2px] bg-white"></span>    
                <p className="text-white text-2xl">Chegou a hora de Praticar!</p>            
            </div>
            <div className="flex flex-col md:flex md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-10">
                {          cardOptions.map(items => {
                return <CardExercises
                title={items.title}
                picture={items.picture}
                link={items.link}
                />
            })}
            </div>
 
        </div>

    )
}