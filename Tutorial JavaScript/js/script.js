//Inserindo texto no parágrafo
document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS</b>!";
alert("isso é um alerta");
console.log("isso é um console log");
//Para usar nomes compostos no JS, usamos desta forma:
var primeiroNome;
var primeiro_nome;
/*Tomar bastante cuidado com a sintaxe do JS, utilizar "" ou '' para textos, por exemplo, ou saber que o JS é sensitivo a letras maiúsculas ou minúsculas*/

/* No Javascript temos 3 palavras-chave para declara variáveis VAR - LET - CONST.

var -> variável que pode ser redeclarada (usada mais de uma vez com a mesma sintaxe, sempre prevalecendo a última informação definida)

let -> variável que uma vez declarada, não pode ser redeclarada (se usada a mesma sintaxe mais de uma vez, ocasionará erro, entretanto, poderá funcionar em umm bloco diferente mesmo possuindo a mesma sintaxe)

const -> variável que nunca pode mudar, sendo constante, independente da situação, é um item que sempre permanecerá igual.

*/

//Declaração de Variáveis:
var a,b,c;
var nome, sobrenome, nomeCompleto;

/* Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc..

São divididos em 6 "categorias":

1) Operadores Aritiméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência 
4) Operador de Comparação 
5) Operador Condicional (Ternário)
6) Operadores Lógicos
*/

//Neste exemplo prático, podemos ver que o "=" serve como operador de atribuição e o "+"" seria o operador aritmético
var valor1, valor2, total;
valor1 = 5; //atribui 5 ao valor1
valor2 = 2; //atribui 2 ao valor2

total = valor1 + valor2; //designa que o total sera uma soma de dois valores, ou seja, uma operação aritmética
alert(total); 

//Ter atenção ao usar números e letras na mesma variável, apesar de ser possível, pode ser que fique confuso.

nome="Lucas";
sobrenome="Ramos";
nomeCompleto=nome+" "+sobrenome; 
//Neste exemplo, como estamos tratando de letras e não números, automaticamento o "+" acaba se torando um operador de sequência

document.getElementById("texto").innerHTML = nomeCompleto;

//Neste outro exemplo, podemos ver um operador de comparação em prática
var valor1, valor2, total;
valor1 = 8; 
valor2 = 10; 

total = (valor1 == valor2); 
//a partir do momento em que utilizo "==" eu questiono ao código se valor1 é igual valor2, obrigando-lhe a me dar uma resposta em TRUE or FALSE
alert(total);

var idade, eleitor, resultado;
idade=18;
eleitor= (idade<18) ? "Não Eleitor":"Sim, Eleitor"
//Operador condicional, como o nome sugere, atribui uma condição para determinado valor

resultado = (idade > 60 && idade < 70);
//Operador lógico atribui mais de um operador condicional, neste caso, para além da condição, está definindo um gap de idades para poder determinar um resiltado
alert('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade);

/* Funções
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/


