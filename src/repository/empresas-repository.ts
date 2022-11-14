import { Empresa } from "../protocols/Empresa.js";
import empresas from "../database/data.js";
import {connection} from "../database/database.js"
import {Request, Response} from 'express';

function achaEmpresa(){
    return connection.query("SELECT * FROM empresas;");
}
async function achaEmpresaPeloId(req: Request, res: Response, next){
    const {id} = req.params
    const findId = await connection.query('SELECT * FROM empresas WHERE "id" = $1 ', [id])
    next();
}
function novaEmpresa(empresa:Empresa){
    connection.query(`
    INSERT INTO empresas (web, username, situacao) VALUES ($1, $2, $3);
    `, [empresa.web, empresa.username, empresa.situacao]);
}

export {
    achaEmpresa,
    novaEmpresa,
    achaEmpresaPeloId
}