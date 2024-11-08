import Card from "@/components/card";
import Header from "@/components/header";
import CardEstrutura from "../assets/cards/card-estrutura-c.jpg"
import CardRepeticao from "../assets/cards/card-estrutura-repticao.jpg"
import CardExpressao from "../assets/cards/card-expressoes-condicionais.jpg"
import CardIntro from "../assets/cards/card-introducao.jpg"
import CardCond from "../assets/cards/card-operadores-expressoes.jpg"
import CardWelcome from "../assets/cards/card-welcome.jpg"
import Quiz from "@/components/quiz";
import Exercises from "@/components/exercises";
import CardExercises from "@/components/cardExercises";
import Image from "next/image";
import Capa from "../assets/CAPA.jpg"
export default function Home() {

  const cardOptions = [
    { title: "Boas Vindas", descriptions: "Aqui, acreditamos que a jornada de aprender C é tanto desafiadora quanto empolgante. Esta linguagem clássica e poderosa é a base para muitas tecnologias modernas...", picture: CardWelcome }, 
    { title: "Introdução", descriptions: "Programação é o processo de escrever instruções para que um computador execute uma tarefa específica. Essas instruções, chamadas de código, são escritas em...", picture: CardIntro, link: "/posts/introducao" }, 
    { title: "Estrutura em C", descriptions: "Criada em 1972 nos laboratórios Bell por Dennis Ritchie a linguagem C se tornou uma das mais bem-sucedidas linguagem de programação, sendo considerada de nível intermediário...", picture: CardEstrutura, link: "/posts/estrutura_c" }, 
    { title: "Expressões Condicionais", descriptions: "A condição que fica dentro dos parênteses é o que vai definir se vai entrar dentro do comando if ou não, essa condição, pode ser representada por variáveis e operadores...", picture: CardCond }, 
    { title: "Estrutura de Repetição", descriptions: "Laços de repetição, também conhecidos como loops, são estruturas fundamentais em programação que permitem a execução repetida de um bloco de código enquanto...", picture: CardRepeticao }, 
    { title: "Operadores e Expressões", descriptions: "O C possui operadores unários e binários. Os unários agem sobre uma única variável, modificando ou não seu valor, enquanto os binários utilizam duas variáveis e...", picture: CardExpressao}, 
  ]

  return (
    <>
      <Header />
      <Image
        className="hidden md:block md:h-full md:w-full"
        src={Capa}/>
      <div className="w-full flex flex-col items-center justify-center my-12 gap-10">
        <div className="flex flex-col justify-center md:flex md:flex-row md:flex-wrap items-center md:justify-between max-w-[1050px] gap-y-6">
          {
            cardOptions.map(items => {
              return <Card 
                title={items.title} 
                description={items.descriptions} 
                picture={items.picture}
                link={items.link} 
              />
            })
          }
        </div>
          <Exercises />
        <div>
          <Quiz />
        </div>
      </div>
    </>
  )
}
