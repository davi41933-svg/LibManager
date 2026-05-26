import { Router } from "express";
import { livroController } from "../controllers/livroController.js";

const router = Router();

router.get('/livro', livroController.listarLivros);
router.post('/livro', livroController.cadastrarLivro);

export default router;