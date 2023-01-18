const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT    DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Envi</button>
    </form>
    `);
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
