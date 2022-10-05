let div = document.querySelector('.paragrafos');
let paragrafos = div.querySelectorAll('p');

let estilosBody = getComputedStyle(document.body);
let backgroundColorBody = estilosBody.backgroundColor;


for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'red';
    console.log(p);
}