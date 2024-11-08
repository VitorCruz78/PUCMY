import Header from "@/components/header";
import Capa from "../../../assets/posts/capa_introducao_ex.png"
import Image from "next/image";
import Answers from "@/components/answers";

export default function ExercIntroducao() {
    return (
        <>
            <Header />
            <div className="w-full h-full flex flex-col items-center justify-start my-12">
                <div className="w-full max-w-[450px] md:max-w-[700px] lg:max-w-[1050px] h-full px-8 sm:px-0">
                    <div className="w-full flex flex-col items-start justify-start gap-12">
                        <Image
                            src={Capa}
                            alt="Capa do conteúdo introdutório"
                            width={1250}
                            height={1250}
                            className="w-full h-full object-fill"
                        />
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <h1 className="w-full text-black text-3xl font-semibold tracking-wide">Exercícios: Introdução a Programação</h1>
                            <span className="w-full h-[2px] bg-defaultBlue"></span>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6">
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">1 - Escreva um programa que exiba a mensagem "Olá, Mundo!" na tela.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">2 - Escreva um programa que leia um número inteiro digitado pelo usuário e o exiba de volta.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">3 - Escreva um programa que leia dois números inteiros e exiba a soma deles.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div>  
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">4 - Escreva um programa que leia um número inteiro e exiba o dobro desse número.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div> 
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">5 - Escreva um programa que leia o ano de nascimento de uma pessoa e o ano atual, e calcule a idade dessa pessoa.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div>  
                            <div className="flex flex-col">
                                <h2 className="w-full text-black text-xl font-medium">6 - Escreva um programa que some a sua altura mais a altura do seu colega.</h2>
                                <p className="text-sm text-defaultText">Utilize o Editor de código!</p>
                            </div>  
                        </div>
                    </div>
                    <Answers />
                </div>
            </div>
        </>
    )
}
