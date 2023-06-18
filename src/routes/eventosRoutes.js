import express from "express";  
import eventosController from "../controllers/eventosController.js";

const router = express.Router();

router
    .get("/evento", eventosController.listarEventos)
    .post("/evento", eventosController.cadastrarEvento)
    .put("/evento/:id", eventosController.atualizarEvento)
    .delete("/evento/:id", eventosController.excluirEvento)

export default router;

