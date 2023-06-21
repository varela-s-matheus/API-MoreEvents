import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo_evento: {type: String, required: true},
        descricao: {type: String, required: true},
        classificacao: {type: Number, required: true},
        artistas: {type: String},
        cep: {type: String, required: true},
        estado: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true},
        numero: {type: Number, required: true},
        complemento: {type: String}
    }
)

const eventos = mongoose.model('eventos', eventoSchema);

export default eventos;