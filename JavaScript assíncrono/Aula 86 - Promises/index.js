function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

function aleatorio(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

esperaAi('Frase 1', aleatorio(1, 3))
.then(resposta => { 
    console.log(resposta);
    return esperaAi('Frase 4', aleatorio(1,3))
;})
.then(resposta => {
    return resposta + ' outro then';
})
.then(resposta => {
    console.log(resposta);
})
.catch();

esperaAi('Frase 2', aleatorio(1, 3));
esperaAi('Frase 3', aleatorio(1, 3));
