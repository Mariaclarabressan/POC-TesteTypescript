import {Request, Response} from 'express';
import { achaEmpresa, novaEmpresa } from '../repository/empresas-repository.js';
import { Empresa } from '../protocols/Empresa.js';
import { empresaSchema } from '../schemas/joi-empresa.js';
import { connection } from '../database/database.js';


async function mostrarEmpresas (req:Request, res: Response ){
    const busca = await achaEmpresa();
    return res.send(busca.rows);
}

function insereNovaEmpresa(req: Request, res: Response) {

    const novoCliente = req.body as Empresa
    
    const {error} = empresaSchema.validate(novoCliente);
    if(error) {
        return res.status(400).send(error.message)
    }

    
    novaEmpresa(novoCliente);
    return res.send(`Nova empresa cadastrada`)
}

async function deletaEmpresa(req: Request, res: Response){
    const {id} = req.params;

    try {
        await connection.query('DELETE FROM empresas WHERE id=$1', [id]);

        res.status(202).send('Empresa deletada com sucesso')
    } catch (error) {
        res.status(500).send('Não foi possível deletar a empresa')        
    }
}

export {
    mostrarEmpresas,
    insereNovaEmpresa, 
    deletaEmpresa
}