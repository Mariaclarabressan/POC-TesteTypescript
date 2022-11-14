import {Request, Response} from 'express';
function calculaFrete (frete:number): number {
    return frete*0.3;
}
function descontoFrete (req: Request, res: Response){
    const {frete} = req.query;

    const novoFrete = calculaFrete(Number(frete));

    res.send({
        resultado : `O frete com desconto fica ${novoFrete}`
    })

}

export {
    descontoFrete,
}