import { Router } from "express";
import { livroController } from "../controllers/livroController.js";

const router = Router();

router.get('/livros', livroController.listarLivros);
router.post('/livros', livroController.cadastrarLivro);

export default router;