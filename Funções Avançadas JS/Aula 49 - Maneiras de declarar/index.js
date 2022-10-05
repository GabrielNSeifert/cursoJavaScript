// Declaração de função (Function hoisting)
function oi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe);
// Function expression
const nome = function (nome = 'Osh') {
    console.log(nome);
};

function executaNome(funçao) {
    funçao();
}

executaNome(nome);

// Arrow function
const arrowFunction = () => {
    console.log('Arrow Function');
};

arrowFunction();

// Dentro de um objeto
const objeto = {
    falar() {
        console.log('Cóe');
    }
}

objeto.falar();