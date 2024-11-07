import Image from "next/image";
import Header from "@/components/header";
import Capa from "../../../assets/posts/capa_introducao.png"

export default function Introducao() {
    return (
        <>
            <Header />
            <div className="w-full h-full flex flex-col items-center justify-start">
                <div className="w-full max-w-[1050px] h-full mt-12">
                    <div className="w-full flex flex-col items-start justify-start gap-12">
                        <Image 
                            src={Capa}
                            alt="Capa do conteúdo introdutório"
                            width={1250}
                            height={1250}
                            className="w-full h-full object-fill"
                        />
                        <div className="w-full flex flex-row items-start justify-between gap-12">
                            <div className="w-full flex flex-col items-start justify-start gap-12">
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <h1 className="w-full text-black text-3xl font-semibold tracking-wide">Introdução a Programação</h1>
                                    <span className="w-full h-[2px] bg-defaultBlue"></span>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Programação</h2>
                                    <p className="text-base text-defaultText">Programação é o processo de escrever instruções para que um computador execute uma tarefa específica. Essas instruções, chamadas de código, são escritas em uma linguagem de programação que o computador possa entender. A programação funciona como uma ferramenta de comunicação entre desenvolvedores e computadores, permitindo a criação de programas, aplicativos e softwares.</p>
                                </div>
                                <div className="w-full flex flex-col items-start gap-6">
                                    <div className="space-y-2">
                                        <h2 className="text-black text-2xl font-semibold tracking-wide">Por que Aprender Programação?</h2>
                                        <p className="text-base text-defaultText">A demanda por programadores tem crescido significativamente nos últimos anos, tornando essa uma habilidade altamente valorizada no mercado de trabalho. Aprender programação é importante por diversas razões:</p>
                                    </div>
                                    <ul className="list-disc space-y-2">
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Materialização de ideias criativas: </span>
                                                Com programação é possível transformar conceitos abstratos em programas funcionais;
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Melhoria da qualidade de vida: </span>
                                                Soluções tecnológicas podem resolver problemas do dia a dia, aumentar nossa eficiência;
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Expansão de oportunidades: </span>
                                                Programadores têm oportunidades globais, como trabalhar remotamente para empresas internacionais e ganhar em moedas estrangeiras;
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Desenvolvimento de habilidades analíticas e lógicas: </span>
                                                A prática da programação ensina a resolver problemas de forma estruturada, o que é útil em qualquer campo.
                                            </p>
                                        </li>   
                                    </ul>
                                </div>
                                <div className="w-full flex flex-col items-start gap-6">
                                    <div className="space-y-2">
                                        <h2 className="text-black text-2xl font-semibold tracking-wide">Linguagens de Programação e Seus Tipos</h2>
                                        <p className="text-base text-defaultText">Existem diversos tipos de linguagens de programação, cada uma adequada a diferentes objetivos e complexidades de projetos. Alguns exemplos são:</p>
                                    </div>
                                    <ul className="list-disc space-y-2">
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens concorrentes, distribuídas e paralelas;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens de aplicação;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens de fluxo de dados;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens de microprogramação;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens de montagem e macro;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens de projeto;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens extensíveis;</p>
                                        </li>
                                        <li>
                                            <p className="text-black text-base font-semibold">Linguagens concorrentes, distribuídas e paralelas;</p>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-defaultText">Essas categorias diferenciam-se de acordo com o propósito de uso, como otimização de processos, criação de sistemas específicos ou manipulação de dados.</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Lógica de Programação</h2>
                                    <p className="text-sm text-defaultText">A lógica de programação é a habilidade de pensar de forma estruturada e lógica para desenvolver soluções que os computadores possam executar. Essa lógica permite a criação de algoritmos eficientes e eficazes.</p>
                                </div>
                                <div className="w-full flex flex-col items-start gap-6">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Importância da Lógica de Programação</h2>
                                    <ul className="list-disc space-y-2">
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Resolução de Problemas: </span>
                                                A lógica permite que os problemas sejam divididos em partes menores e mais fáceis de resolver.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Eficiência: </span>
                                                Algoritmos bem desenhados consomem menos recursos e são mais rápidos.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Facilidade de Manutenção: </span>
                                                Códigos com lógica clara são mais fáceis de manter e atualizar.                                            
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-sm text-defaultText">
                                                <span className="text-black text-base font-semibold">Adaptação a Novas Linguagens: </span>
                                                Compreender a lógica facilita o aprendizado de novas linguagens, pois os princípios fundamentais são universais.                                          
                                            </p>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-defaultText">Algumas formas de representar a lógica de programação incluem o uso de fluxogramas e algoritmos. A lógica não deve ser confundida com algoritmos; enquanto a lógica fornece a estrutura de pensamento, o algoritmo é uma sequência de instruções que resolve um problema específico.</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Algoritmos</h2>
                                    <p className="text-base text-defaultText">Um algoritmo é uma sequência finita de passos para resolver um problema ou realizar uma tarefa. É o coração da lógica de programação, e sua eficiência é essencial para garantir a otimização de recursos e o bom funcionamento dos sistemas. Ao aprender lógica de programação, desenvolvemos a habilidade de criar algoritmos que identificam variáveis, utilizam estruturas de controle (como loops e condicionais), e fazem uso de estruturas de dados apropriadas.</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Benefícios de Algoritmos Eficientes</h2>
                                    <p className="text-base text-defaultText">Um algoritmo é uma sequência finita de passos para resolver um problema ou realizar uma tarefa. É o coração da lógica de programação, e sua eficiência é essencial para garantir a otimização de recursos e o bom funcionamento dos sistemas. Ao aprender lógica de programação, desenvolvemos a habilidade de criar algoritmos que identificam variáveis, utilizam estruturas de controle (como loops e condicionais), e fazem uso de estruturas de dados apropriadas.</p>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Fluxogramas</h2>
                                    <p className="text-base text-defaultText">São representações gráficas da lógica e sequência de etapas de um algoritmo. Eles ajudam a visualizar de forma simples o fluxo de controle de um programa, facilitando a compreensão da estrutura lógica por trás do código e como um algoritmo funciona e auxiliam o desenvolvedor a mapear as sequências antes de elas serem implementadas.</p>
                                    <p className="text-base text-defaultText">Fluxogramas foram criados na década de 1920 por engenheiros industriais para melhorar a eficiência de processos de trabalho. Com o tempo, passaram a ser amplamente usados na programação e na ciência da computação.</p>
                                </div>
                            </div>
                            <div className="w-1/2 h-[36rem] bg-[#F4F4F4] rounded-md shadow-md p-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
