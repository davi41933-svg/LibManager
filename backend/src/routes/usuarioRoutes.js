import Router from 'express';
import { usuarioController } from '../controllers/usuarioController';

const router = Router();

router.post('/usuario', usuarioController.cadastrarUsuario);

export default router;