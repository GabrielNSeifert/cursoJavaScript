//Exiba: Gabriel Seifert Neves tem ** anos, pesa ** kg, tem ** de altura, nasceu no ano de ** e seu IMC é de **.

let Nome = 'Gabriel';
let NomeMeio = 'Seifert';
let Sobrenome = 'Neves';
let Idade = 21;
let PesoKG = 55;
let AlturaM = 1.68;
let AnoAtual = 2022;
let AnoNascimento = AnoAtual - Idade;
let IMC = (PesoKG/(AlturaM*AlturaM));

console.log(Nome, NomeMeio, Sobrenome, 'tem', Idade, 'anos, pesa', PesoKG, 'kg, tem', AlturaM, 'de altura, nasceu no ano de', AnoNascimento, 'e seu IMC é de', IMC + "." );