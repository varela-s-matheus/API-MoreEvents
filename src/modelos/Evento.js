import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo_evento: {type: String, required: true},
        descricao: {type: String, required: true},
        classificacao: {type: Number, required: true},
        artistas: {type: String},
        endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'enderecos', required: true}
    }
)

const eventos = mongoose.model('eventos', eventoSchema);

export default eventos;