import express from "express";
import eventos from "./eventosRoutes.js";
import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })
    
    app.use(
        express.json(),
        eventos,
        usuarios
    )
}

export default routes;

