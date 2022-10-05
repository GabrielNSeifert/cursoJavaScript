/*
Entre 0-11  ->  Bom Dia
Entre 12-17 ->  Boa Tarde
Entre 18-23 ->  Boa Noite
*/

const hora = 24;

if (hora < 12) {
    console.log('Bom Dia!');
} else if ( hora >= 12 && hora < 17) {
    console.log('Boa Tarde!');
} else if (hora >= 17 && hora < 24) {
    console.log('Boa Noite!');
} else if ( hora < 0 || hora >=24) {
    console.log('Ta louco PORRA?!!');
}

///////////////////////////////////////////

let tenhoGrana = 'Fuck';

if (tenhoGrana) {
    console.log('Contratar uma Puta!');
} else {
    console.log ('Bater uma punheta!');
}