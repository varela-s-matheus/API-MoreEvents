import express from "express";
import eventos from "./eventosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })
    
    app.use(
        express.json(),
        eventos
    )
}

export default routes;

