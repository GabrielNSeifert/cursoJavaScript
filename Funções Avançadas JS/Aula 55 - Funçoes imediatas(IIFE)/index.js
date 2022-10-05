// Função IIFE não toca o escopo global.

(function (){
const nome = 'Gabriel';
const sobrenome = 'Seifert';

function criaNome(){
    return nome +' '+ sobrenome;
}

function falaNome(criaNome){
    console.log(criaNome());
}

falaNome(criaNome);

}) ();

