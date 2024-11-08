import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Answers() {
    const [open, setOpen] = useState(false)
    const answersData = [
        { 
            page: "introducacao", 
            data: [{
                title: "1 - Escreva um programa que exiba a mensagem Olá, Mundo! na tela.",
                answer: "",
            }] 
        }
    ]

    return (
        <div 
            className="w-full border-2 border-black rounded-tl-xl rounded-tr-xl flex flex-col items-center justify-start p-4 mt-12 transition-all ease-in-out duration-200 hover:bg-gray-300/50"
        >
            <div
                onClick={() => setOpen(!open)}  
                className="cursor-pointer w-full flex flex-row items-center justify-between"
            >
                <h2 className="text-xl text-defaultBlue font-bold">Respostas</h2>
                <FaAngleDown size={24} />
            </div>
            <div className={`w-full ${!open ? "h-0" : "h-96 my-6"} transition-all ease-in-out duration-200`}></div>
        </div>
    )
}
