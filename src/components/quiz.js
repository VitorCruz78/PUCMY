import Image from "next/image";
import quizWoman from "../assets/image_quiz.jpg"
import Link from "next/link";
export default function Quiz(){
    return(
        <div className="w-full">
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <h1 className="w-full text-black text-3xl font-semibold tracking-wide">Quiz</h1>
                <span className="w-full h-[2px] bg-defaultBlue"></span>                
            </div>
            <div className="flex flex-col md:flex md:flex-row items-start justify-start gap-12 w-[1140px] h-[540px] mt-10 rounded-xl shadow-xl">
                <Image 
                    className="hidden md:block md:h-full"
                    src={quizWoman}
                    width={500}
                    height={500}
                />
                <div className="mt-10 flex flex-col justify-center items-center gap-4 w-full">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold">Hora do teste</h1>
                        <p className="text-lg md:text-xl font-semibold">Teste seu conhecimento sobre o que aprendeu!</p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8">
                        <div className="bg-gradient-to-r from-defaultOrange to-[#8D4C26]  w-[280px] sm:w-[350px]  md:w-[450px] h-12 flex flex-row justify-center items-center rounded-full">
                            <Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UOVdDSzFNRjU2Mk1JTkVQQlE4Q0tTRVVSWS4u&route=shorturl"} className="text-white text-lg" target="_blank">Introdução a Programação</Link>
                        </div>
                        <div className="bg-gradient-to-r from-defaultTurq to-[#135258] w-[280px] sm:w-[350px] md:w-[450px] h-12 flex flex-row justify-center items-center rounded-full">
                            <Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UMUpKUEVYQUJIUFRSVktWQ1dIV0E0TlFNVi4u&route=shorturl"} target="_blank" className="text-white text-lg">Estrutura C</Link>
                        </div>
                        <div className="bg-gradient-to-r from-[#FF39B7] to-[#99226E] w-[280px] sm:w-[350px] md:w-[450px] h-12 flex flex-row justify-center items-center rounded-full">
                            <Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UNzBRNU40WjVZSzNJU003VU5MSDEzTEc5SS4u&route=shorturl"} target="_blank" className="text-white text-lg">Estruturas Condicionais</Link>
                        </div>
                        <div className="bg-gradient-to-r from-[#00D66B] to-[#007138] w-[280px] sm:w-[350px] md:w-[450px] h-12 flex flex-row justify-center items-center rounded-full">
                            <Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UOVcyQjlBSDBZN0s1RUJMOFA5TVRZUDk0NC4u&route=shorturl"} target="_blank" className="text-white text-lg">Estruturas de Repetição</Link>
                        </div>
                        <div className="bg-gradient-to-r from-[#9B9ED1] to-[#444561] w-[280px] sm:w-[350px] md:w-[450px] h-12 flex flex-row justify-center items-center rounded-full">
                            <Link href={"https://forms.office.com/pages/responsepage.aspx?id=RO2KG9CnnECXlrJkWUmGoHqbW1DiQVVJqoSWcSmA4x9UODMzT0pVTlVUSklBUUFDOThCU05GOEMwOS4u&route=shorturl"} target="_blank" className="text-white text-lg">Operadores Lógicos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}