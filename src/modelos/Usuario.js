import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome_usuario: {type: String, required: true},
        data_nascimento: {type: Date, required: true},
        cpf: {type: Number, required: true},
        telefone: {type: Number, required: true},
        cep: {type: String, required: true},
        estado: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true},
        numero: {type: Number, required: true},
        complemento: {type: String},
        e_mail: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;