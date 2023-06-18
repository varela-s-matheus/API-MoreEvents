import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema(
    {
        id: {type: String},
        cep: {type: String, required: true},
        estado: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true},
        numero: {type: Number, required: true},
        complemento: {type: String}
    }
)

const enderecos = mongoose.model('enderecos', enderecoSchema);

export default enderecos;