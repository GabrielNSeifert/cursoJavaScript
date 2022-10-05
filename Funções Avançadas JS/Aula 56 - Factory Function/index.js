function criaPessoa(nome,sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return ` ${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Seifert', 1.65, 55);
console.log(p1.fala('Falando sobre JS'));
console.log(p1.imc());
