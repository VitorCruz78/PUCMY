import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Answers({ page }) {
    const [open, setOpen] = useState(false)
    const answersData = [
        {
            page: "introducao",
            data: [
                {
                    title: "1 - Escreva um programa que exiba a mensagem Olá, Mundo! na tela.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            // Exibe a mensagem 
                            printf("Ola, Mundo!");  
                            return 0; 
                        }
                    `,
                },
                {
                    title: "2 - Escreva um programa que leia um número inteiro digitado pelo usuário e o exiba de volta.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            int numero; 
                            
                            printf("Digite um numero inteiro: "); 
                            scanf("%i", &numero);
                            
                            printf("Voce digitou o numero: %i", numero);  
                            
                            return 0;
                        }
                    `,
                },
                {
                    title: "3 - Escreva um programa que leia dois números inteiros e exiba a soma deles.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            int num1, num2, soma;  
                            
                            printf("Digite o primeiro numero: "); 
                            scanf("%i", &num1);  
                            
                            printf("Digite o segundo numero: "); 
                            scanf("%i", &num2);  
    
                            soma = num1 + num2;  
                            
                            printf("A soma e: %i", soma);  
                            
                            return 0;
                        }
                    `,
                },
                {
                    title: "4 - Escreva um programa que leia um número inteiro e exiba o dobro desse número.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            int numero, dobro;  
    
                            printf("Digite um numero inteiro: "); 
                            scanf("%i", &numero);  
    
                            dobro = numero * 2;  
    
                            printf("O dobro de %i e: %i", numero, dobro); 
                            
                            return 0;
                        }
                    `,
                },
                {
                    title: "5 - Escreva um programa que leia o ano de nascimento de uma pessoa e o ano atual, e calcule a idade dessa pessoa.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            int ano_nascimento, ano_atual, idade;  
                            
                            printf("Digite o ano de nascimento: "); 
                            scanf("%d", &ano_nascimento);  
                            
                            printf("Digite o ano atual: ");
                            scanf("%d", &ano_atual);  
                            
                            idade = ano_atual - ano_nascimento;  
    
                            printf("A pessoa tem %d anos.\n", idade);
                            
                            return 0;
                        }
                    `,
                },
                {
                    title: "6 - Escreva um programa que some a sua altura mais a altura do seu colega.",
                    answer: `
                        #include<stdio.h>  
                        #include<stdlib.h>
                        int main() { 
                            float altura1, altura2, resultado;  
    
                            printf("Digite sua altura: "); 
                            scanf("%f", &altura1);  
    
                            printf("Digite a altura do seu colega: "); 
                            scanf("%f", &altura2);  
    
                            resultado = altura1 + altura2;  
                            printf("A soma das alturas e: %f", resultado);
                            
                            return 0;
                        }
                    `,
                }
            ]
        }
    ]

    return (
        <div className="w-full border-2 border-black rounded-tl-xl rounded-tr-xl flex flex-col items-center justify-start p-4 mt-12 transition-all ease-in-out duration-200 hover:bg-gray-300/50">
            <div
                onClick={() => setOpen(!open)}  
                className="cursor-pointer w-full flex flex-row items-center justify-between"
            >
                <h2 className="text-xl text-defaultBlue font-bold">Respostas</h2>
                <FaAngleDown size={24} />
            </div>
            <div className={`w-full ${!open ? "h-0" : "h-fit my-6"} transition-all ease-in-out duration-200 flex flex-col items-start justify-start gap-8`}>
                {
                    open ?
                        answersData.map(items => {
                            return page === items?.page && 
                                items.data.map(anw => {
                                    return <div className="flex flex-col items-start gap-[4px]">
                                        <h2 className="text-xl text-black font-semibold">{anw?.title}</h2>
                                        <code className="text-lg text-defaultText">{anw?.answer}</code>
                                    </div>
                                })
                            })
                        : <></>
                }
            </div>
        </div>
    )
}
