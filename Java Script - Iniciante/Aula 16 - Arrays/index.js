//            01234567
const nome = 'Gabriel';
console.log(nome[1])
//                 0       1        2
let alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);

//Editar um valor da Array
alunos[0] = 'Gabriel';
console.log(alunos[0]);

//Adicionar valor no Array
alunos[3] = 'Camila';
console.log(alunos);

//Adicionar valor no final e no começo da Arrray.
alunos.push('Gabriela');    //Final
alunos.unshift('Mariana');  //Começo
console.log(alunos);

//Descobrir tamanho do Array
console.log(alunos.length);

//Remover valor do Array
alunos.pop();   //Começo
alunos.shift(); //Final
console.log(alunos);

//Separar array.
console.log(alunos.slice(0,2));
console.log(alunos.slice(0,-2));

