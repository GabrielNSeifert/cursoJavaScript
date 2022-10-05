let animes = 'Naruto';
i = 0;

while (i < animes.length ) {
console.log(animes[i]);
    i++
}

/********************************************************************/

function random(min,max){
    const n = Math.random() * ( max - min) + min;
    return Math.floor(n);
} // Funçao de numero aleatorio.

let rand = 10;

console.log(rand);

const min = 1;
const max = 50;

while (rand !== 10) {
    console.log(rand);
}

do {
    console.log(rand);
}while (rand !== 10)