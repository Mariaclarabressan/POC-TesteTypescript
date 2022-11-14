import express from "express";
import { descontoFrete } from "./controllers/freteController.js";
import { achaEmpresaPeloId } from "./repository/empresas-repository.js";
import { mostrarEmpresas,insereNovaEmpresa, deletaEmpresa } from "./controllers/empresasController.js";

const server = express();
server.use(express.json())

server.get('/teste', (req,res) => {
    res.send('ok, funcionou')
});

server.get('/desconto', descontoFrete);
server.get('/empresas', mostrarEmpresas);
server.post('/empresas', insereNovaEmpresa);
//server.get('/empresas/:id', achaEmpresaPeloId);

server.delete('/empresas/:id', achaEmpresaPeloId, deletaEmpresa )
server.listen(4000, ()  => {
    console.log('Está rodando')
})