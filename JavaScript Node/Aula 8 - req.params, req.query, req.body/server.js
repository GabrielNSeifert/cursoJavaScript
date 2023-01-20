const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Envi</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (req,res) => {
    console.log(req.params.idUsuarios);
    res.send('Oi');
});

app.post('/', (req,res) => {
    res.send('Recebi o formulário!');
})

app.get('/contato', (req,res) => {
    res.send('YEEEEAH');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    setInterval(() => {
        console.log('Servidor executando na porta 3000');
    }, 5000);
});
