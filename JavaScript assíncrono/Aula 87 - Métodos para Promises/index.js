function aleatorio(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    });
};

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
   // 'Primeiro valor',
    esperaAi('Promise 1', aleatorio(1, 5)),
    esperaAi('Promise 2', aleatorio(1, 5)),
    esperaAi('Promise 3', aleatorio(1, 5)),
    //'Outro valor'
];

/* Promise.all(promises)
.then((valor) => {
    console.log(valor);
})
.catch((erro) => {
    console.log(erro);
}); */

Promise.race(promises)
.then((valor) => {
    console.log(valor);
})
.catch((erro) => {
    console.log(erro);
});