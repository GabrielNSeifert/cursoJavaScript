let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A
let z = 'Z';

console.log(a,b,c);

z = c;
c = a;
a = b;
b = z;

console.log(a,b,c);