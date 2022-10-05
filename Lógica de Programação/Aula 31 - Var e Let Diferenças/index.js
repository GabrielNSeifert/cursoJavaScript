const verdadeiro = true;

let nome = "Gabriel";  //Let tem escopo de bloco {...}
var osh = "Neves"; //Var só tem escopo de função (Sera declarada toda vez que utilizado o var)

var osh = "Ué";
console.log(osh);

if (verdadeiro) {
    let nome = "Gabriel";
    console.log(nome,osh);

    if (verdadeiro) {
        let nome = "Gabriell";
        console.log(nome,osh);
    }
}