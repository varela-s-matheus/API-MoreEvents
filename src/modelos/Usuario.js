import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome_usuario: {type: String, required: true},
        data_nascimento: {type: String, required: true},
        cpf: {type: String, required: true},
        telefone: {type: String, required: true},
        cep: {type: String, required: true},
        estado: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true},
        numero: {type: Number, required: true},
        complemento: {type: String},
        email: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;



// [{"nome_usuario":"Matheus Varela","data_nascimento":"12062022","cpf":"12345678999","telefone":"47996242549","cep":"89051615","estado":"SC","cidade":"Blumenau","bairro":"Nova Esperança","numero":"265","complemento":"casa","email":"matheus@gmail.com", "senha": "123455"}]