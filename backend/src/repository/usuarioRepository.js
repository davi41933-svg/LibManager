import { pool } from '../config/db.js';


export const usuarioRepository = {

    // Cadastro de usuário
    async cadastrarUsuario(nome, email, senhaHash) {
        
        const [resultado] = await pool.query(`
            INSERT INTO usuarios (
            nome, 
            email,
            senha
            ) VALUES (?, ?, ?)`, [nome, email, senhaHash]);

            return resultado;
    }
}