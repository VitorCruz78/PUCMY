import Image from "next/image";

export default function Card({ title, description, picture }){
    return(
        <div className="bg-white w-[340px] h-fit rounded-lg shadow-xl">
            <div className="bg-red-500 w-[340px] h-[220px] rounded-t-lg">
                <Image className="w-full h-full" src={picture} width={250} height={250} />
            </div>
            <div className="m-5 h-full flex flex-col items-start justify-between    ">
                <div>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="mt-1">{description}</p>
                </div>
                <p className="font-semibold text-defaultGreen mt-3 ">Saiba mais...</p>
            </div>
        </div>
    )
}