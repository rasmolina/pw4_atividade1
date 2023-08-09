const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

//primeira rota para validar o primeiro exemplo
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/new',(req,res)=>{
    res.send('Hello New World!');
});

app.listen(3000,()=>{
    console.log("Conectado porta padrão 3000");
});