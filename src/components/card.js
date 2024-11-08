import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, picture, link }){
    return(
        <div className="bg-white w-[340px] min-h-[30rem] h-full rounded-lg shadow-xl">
            <div className="w-[340px] h-[220px] rounded-t-lg">
                <Image className="w-full h-full" src={picture} width={250} height={250} />
            </div>
            <div className="h-[18rem] flex flex-col items-start justify-between p-6">
                <div className="space-y-2">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p>{description}</p>
                </div>
                <Link href={`${link ? link : '/'}`} className="font-semibold text-defaultGreen">Saiba mais...</Link>
            </div>
        </div>
    )
}
