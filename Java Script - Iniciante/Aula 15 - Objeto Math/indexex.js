let numero = prompt('Digite seu numero: ');
numero = Number(numero);

let seuNumero = document.getElementById('seuNumero');
seuNumero.innerHTML = `Seu numero é: ${numero}`;

let suaRaiz = document.getElementById('suaRaiz');
suaRaiz.innerHTML = `A Raiz Quadrada é de: ${numero ** 0.5}`;

let numInteiro = document.getElementById('numeroInteiro');
numInteiro.innerHTML = ` O numero ${numero} é inteiro: ${Number.isInteger(numero)}`; 

let naoNumero = document.getElementById('notNumber');
naoNumero.innerHTML = `Não é um numero: ${isNaN(numero)}`;

let arredondaBaixo = document.getElementById ('arredondaBaixo');
arredondaBaixo.innerHTML = `Arredondando para baixo é: ${Math.floor(numero)}`;

let arredondaCima = document.getElementById ('arredondaCima');
arredondaCima.innerHTML = `Arredondando para cima é: ${Math.ceil(numero)}`;

let duasDecimais = document.getElementById ('duasDecimais');
duasDecimais.innerHTML = `Duas casas decimais: ${numero.toFixed(2)}`;




/*const varNumero = window.document.getElementById('seuNumero');
const texto = document.getElementById('texto');
let numeroMenosDois= numero - 2;
let numeroInteiro = document.getElementById('numeroInteiro');


varNumero.innerHTML = numero;
texto.innerHTML = `<p> Seu número -2 é: ${numeroMenosDois}</p>`;

numeroInteiro.innerHTML = ` ${numero} é inteiro? ${Number.isInteger(numero)}`;*/