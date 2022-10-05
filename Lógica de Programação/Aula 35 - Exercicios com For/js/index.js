let container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div);

const elementos = [
    { tag: 'p', texto: 'Frase1' },        //0
    { tag: 'div', texto: 'Frase2' },      //1 
    { tag: 'footer', texto: 'Frase3' },   //2
    { tag: 'section', texto: 'Frase4' },  //3
];

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let p = document.createElement(tag);
    p.innerHTML = texto;
    div.appendChild(p);
}
