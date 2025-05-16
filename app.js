import express from "express";

const app = express();
const port = 3000;

const lista = [
    {id: 1, name: 'Miguel Diaz', dojo: 'Cobra Kai'},
    {id: 2, name: 'Robby Keene', dojo: 'Miagy-Do'}
];

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) =>{
    res.send(lista)
});
app.listen(3000, ()=> {
    console.log(`Servidor rodando corretamente na porta ${3000}`)
});