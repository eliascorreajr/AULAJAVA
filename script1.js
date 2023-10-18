console.log("Aguardando o ok do oi!")

alert("Oi")

console.warn("Observando o andamento!");

//Comentários abaixo, se houver.

/*
Quantas linhas de comentário forem necessárias
*/

var a = "Elias";
var b = 19;
var c =  20000.00;
var d = true; // booleano
var num1 = 10 + 10;

console.log(a);
console.log(b);
console.log(c);
console.warn(d);

alert(num1);

var seunome = prompt("Qual o seu nome?");

if (seunome == a) {
    console.warn("O nome bate!")
} else {
    console.error("Cuidado é outra pessoa")
}

// Parse = converte o texto em int. ex: a solicitação de um valor ou numero na caixa do prompt

var valor_string = prompt("Insira um numero");
var valor_numerico = parseInt(valor_string);

console.log(valor_numerico);
    

