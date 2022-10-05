function mostraHora (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}


const timer = setInterval(function (Osh) { console.log(mostraHora())}, 1000);

setTimeout (function() { clearInterval(timer); }, 10000);

setTimeout(function(){
 console.log("Fuck")
}, 5000)