import usuarios from "../modelos/Usuario.js";

class UsuarioController {

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);
    
        usuario.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar evento.`})
          } else {
            res.status(201).send(usuario.toJSON())
          }
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;
    
        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Evento atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }








}

export default UsuarioController;
