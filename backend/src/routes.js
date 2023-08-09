const express = require('express'); //importa express

const routes = express.Router(); //cria objeto com nome de routes

//prepara objeto para validar
const users = [{
    id:1,
    nome:'Roberto',
    email:'roberto@gmail.com',
    password:'12345'
}];

//cria uma rota do tipo post
routes.post('/login', (req,res)=>{
    //res.send('Login endpoint');
    const{email,password} = req.body;
    const user = users.find(user => user.email === email &&
        user.password === password);
    if(user){
        return res.status(200).json(user);
    } else{
        return res.sendStatus(401).json({message:'Credenciais inválidas!'});
    }
});

module.exports = routes; //exporta como modo exports