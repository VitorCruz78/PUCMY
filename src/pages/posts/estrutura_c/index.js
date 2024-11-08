import Image from "next/image";
import Header from "@/components/header";
import Capa from "../../../assets/posts/capa_estrutura_c.png"
import ABC from "../../../assets/posts/estrutura_c/abc.png"
import Entrada_Dados from "../../../assets/posts/estrutura_c/entrada_dados.png"
import Entrada_Dados_Codigo from "../../../assets/posts/estrutura_c/entrada_dados_codigo.png"
import PrintF from "../../../assets/posts/estrutura_c/printf.png"
import ScanF from "../../../assets/posts/estrutura_c/scanf.png"
import Processamento from "../../../assets/posts/estrutura_c/processamento.png"
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
                                </div>
                                <div className="w-full flex flex-col justify-center items-center gap-12">
                                    <Image
                                        src={ABC}
                                        alt="Exemplo de instruções"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="w-full flex flex-col items-start justify-start gap-4">
                                        <h2 className="text-black text-2xl font-semibold tracking-wide">Entrada de Dados</h2>
                                        <p className="text-base text-defaultText">
                                            As variáveis são locais de armazenamento em memória onde os dados podem ser
                                            armazenados e manipulados durante a execução de um programa, elas podem ter diversos tipos,
                                            que indicam o conteúdo que irão armazenar, alguns deles seriam:
                                        </p>
                                        <Image
                                            src={Entrada_Dados}
                                            alt="Exemplo de entrada de dados"
                                            width={500}
                                            height={500}
                                        />
                                        <p className="text-base text-defaultText">
                                            Aqui está um exemplo de como declarar e atribuir um valor a uma variável em c:
                                        </p>
                                        <Image
                                            src={Entrada_Dados_Codigo}
                                            alt="Exemplo de entrada de dados no código"
                                            width={500}
                                            height={500}
                                        />
                                        <p className="text-base text-defaultText">
                                            Neste exemplo a variável “idade” é declarada como um inteiro. A ela então atribuída o valor
                                            de 25 através da atribuição de valor “ idade=25”
                                            O valor da variável “idade” é exibido na tela pela função printf().
                                            A execução deste programa então seria: “ minha idade é :25”.                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-4">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Função Printf</h2>
                                    <p className="text-base text-defaultText">
                                        A função printf é parte de um conjunto de funções pré-definidas armazenadas em uma
                                        biblioteca padrão de rotinas da linguagem C. Ela permite apresentar na tela os valores de qualquer tipo de dado.
                                    </p>
                                    <Image
                                        src={PrintF}
                                        alt="Exemplo de printf"
                                        width={500}
                                        height={500}
                                    />
                                    <p className="text-base text-defaultText">
                                        Nesse caso a frase que vai ser impressa em tela será “olá, mundo”. Então essa é a função
                                        de saída de dados realizada pelo comando printf.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-4">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Função Scanf</h2>
                                    <p className="text-base text-defaultText">
                                        A função scanf em C é utilizada para ler dados de entrada do usuário via teclado, ela permite a interação com o usuário recebendo informações como números ou caracteres, e atribuindo a uma
                                        variável. Vejamos um exemplo:
                                    </p>
                                    <Image
                                        src={ScanF}
                                        alt="Exemplo de scanf"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-4">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Processamento de Dados</h2>
                                    <p className="text-base text-defaultText">
                                        O processamento de dados é uma parte fundamental no nosso programa, nela podemos executar a
                                        lógica do nosso programa. Com o processamento podemos coletar as informações, analisar e
                                        executar toda a lógica do programa por si só.
                                    </p>
                                    <Image
                                        src={Processamento}
                                        alt="Exemplo de processamento de dados"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start justify-start gap-4">
                                    <h2 className="text-black text-2xl font-semibold tracking-wide">Saída de Dados</h2>
                                    <p className="text-base text-defaultText">
                                        A saída de dados é uma parte crucial de qualquer programa, pois é onde apresentamos as informações ao usuário. Utilizamos a função printf para exibir resultados na tela. Essa função faz
                                        parte da biblioteca padrão e permite formatar e apresentar dados de diversos tipos
                                    </p>
                                    <h2 className="text-black text-xl font-semibold tracking-wide">Exemplo de Saída Simples:</h2>
                                    <code className="w-full p-6 border-2 border-gray-300/50 rounded-xl">
                                        printf("Olá, mundo! \n");
                                    </code>
                                    <p className="text-base text-defaultText">
                                        Aqui, \n é um caractere especial que indica uma nova linha. Isso torna a saída mais
                                        organizada.
                                        Quando utilizamos variáveis, a função printf pode devolver valores dinâmicos.
                                        Por exemplo:
                                    </p>
                                    <code className="w-full p-6 border-2 border-gray-300/50 rounded-xl">
                                        int idade = 25; <br></br>
                                        printf("Minha idade é: %i \n", idade);
                                    </code>
                                    <p className="text-base text-defaultText">
                                        Neste caso, %i é um especificador de formato que indica que um inteiro será exibido na
                                        saída. O valor de idade será substituído no lugar do %i, resultando em: "Minha idade é: 25".
                                    </p>
                                </div>
                                <TimeToCode link={``} />
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
