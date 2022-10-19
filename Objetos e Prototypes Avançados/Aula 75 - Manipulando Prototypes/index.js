
const objA = {
    chaveA : 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {
    chaveB: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);
