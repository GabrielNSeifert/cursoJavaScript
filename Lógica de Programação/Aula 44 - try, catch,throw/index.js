

function soma(x,y) {
    if(typeof x !== "number" || typeof y !== "number") {
        throw new Error (
            'X e Y precisam ser numeros.'
        )
    }
    return x + y;
}

console.log(soma(1,"a"));

try {
    console.log(soma(1,"a"));
} catch (err) {
    console.log("Koe");
}