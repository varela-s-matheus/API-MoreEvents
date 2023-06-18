import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome_usuario: {type: String, required: true},
        data_nascimento: {type: Date, required: true},
        cpf: {type: Number, required: true},
        telefone: {type: Number, required: true},
        endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'enderecos', required: true},
        e_mail: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;