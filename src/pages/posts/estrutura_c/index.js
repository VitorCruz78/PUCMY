import Image from "next/image";
import Header from "@/components/header";
import Capa from "../../../assets/posts/capa_estrutura_c.png"
import Retangulo from "../../../assets/symbols/retangulo.svg"
import Paralelogramo from "../../../assets/symbols/paralelogramo.svg"
import Losango from "../../../assets/symbols/losango.svg"
import Oval from "../../../assets/symbols/oval.svg"
import Seta from "../../../assets/symbols/seta.svg"
import Chaves from "../../../assets/symbols/chaves.svg"
import TimeToCode from "@/components/timeToCode";

export default function EstruturaC() {
    return (
        <>
            <Header />
            <div className="w-full h-full flex flex-col items-center justify-start my-12">
                <div className="w-full max-w-[450px] md:max-w-[700px] lg:max-w-[1050px] h-full px-8 sm:px-0">
                    <div className="w-full flex flex-col items-start justify-start gap-12">
                        <Image
                            src={Capa}
                            alt="Capa do conteúdo de estrutura em c"
                            width={1250}
                            height={1250}
                            className="w-full h-full object-fill"
                        />
                        <div className="w-full flex flex-row items-start justify-between gap-12">
                            <div className="w-full flex flex-col items-start justify-start gap-12">
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <h1 className="w-full text-black text-3xl font-semibold tracking-wide">Programação em C</h1>
                                    <span className="w-full h-[2px] bg-defaultBlue"></span>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Estrutura de  um programa em C</h2>
                                    <p className="text-base text-defaultText">
                                        Primeiramente precisamos importar algumas bibliotecas para utilizarmos na hora de
                                        programar, essas bibliotecas são como pacotes com ferramentas que o computador pode utilizar, e
                                        que podemos chamar no nosso programa quando quisermos.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col items-start gap-6">
                                    <code className="w-full p-6 border-2 border-gray-300/50 rounded-xl">
                                        #include stdio.h <br></br>
                                        #include stdlib.h
                                    </code>
                                    <p className="text-base text-defaultText">
                                        Após isso, iremos abrir o nosso “bloco” da função, pense nele como uma folha de instruções
                                        que o computador irá ler e realizar ações, o computador vai ler essas instruções de cima pra baixo e
                                        da esquerda pra direita, e vai separar as linhas com “;”, ou seja, cada linha TEM que terminar em “;”
                                        assim a máquina vai entender que essa linha de instrução acabou, e deve seguir para a próxima. A
                                        estrutura básica dessa função será assim:
                                    </p>
                                    <code className="w-full p-6 border-2 border-gray-300/50 rounded-xl">
                                        {`Int main (void) { \n
                                        [...]; \n
                                        return 0; \n
                                        }`}
                                    </code>
                                    <p className="text-base text-defaultText">
                                        Basicamente, o que está escrito é que nossa função main retorna um valor do tipo inteiro (Int),
                                        não precisa de nada para funcionar, ou, não “recebe” nada “(void)” e retorna um valor inteiro 0 que
                                        marca o fim da função, ou seja, o seu retorno interno, que informação ela vai devolver para o
                                        computador, como estamos iniciando. Tudo que for escrito dentro das
                                        chaves “{ }” é a nossa função, e só existe dentro dela. Podemos separar o que vamos escrever
                                        nessa função em 3 etapas:
                                    </p>
                                    <div className="text-defaultText">
                                        <p>- Entrada de dados</p>
                                        <p>- Processamento de dados</p>
                                        <p>- Saída de dados</p>
                                    </div>
                                    <p className="text-base text-defaultText">
                                        O computador pode ler as instruções, pedir informações pro usuário usando
                                        texto na tela, por exemplo, “Me informe um número: ”, “Escreva um nome: ”, “Digite sua letra do alfabeto favorita: ”. Assim o computador vai guardar essas informações na sua memória. Dessa
                                        forma, quando ele terminar de guardar essas informações, ele pode começar a processar esses dados, por exemplo, multiplicar o número que foi informado anteriormente por 10, mudar a ordem
                                        dos seus nomes, contar as letras de uma palavra especificada. E por fim, após realizar o que estiver
                                        na sua lista de tarefas, pode devolver essas informações para o usuário, pela mesma tela na
                                        qual foram pedidas as informações, seguindo os exemplos anteriores. alguns casos seriam: “O
                                        número informado multiplicado por 10 é igual a 40”, “seu nome fora de ordem é Tal de Fulano”, e por
                                        assim vai.
                                    </p>
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
                                <TimeToCode />
                            </div>
                            <div className="hidden w-1/2 h-fit lg:h-[36rem] bg-[#F4F4F4] rounded-md shadow-md p-6 md:flex md:flex-col items-start justify-start gap-6">
                                <h2 className="text-black text-2xl font-semibold tracking-wide">Tópicos</h2>
                                <ul className="list-disc space-y-2 px-6 text-base text-black font-medium">
                                    <li>Estrutura de um Programa em C</li>
                                    <li>Entrada de Dados</li>
                                    <li>Função Printf</li>
                                    <li>Função Scanf</li>
                                    <li>Processamento de Dados</li>
                                    <li>Saída de Dados</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
