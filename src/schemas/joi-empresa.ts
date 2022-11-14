import Joi, { boolean } from "joi";

export const empresaSchema = Joi.object({
    web: Joi.string().required(),
    username: Joi.string().required(),
    situacao: Joi.boolean()
})