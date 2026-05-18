import { pool } from '../config/db.js'

export const livroRepository = {

    // Listar livros
    async listarLivros() {
        const [resultado] = await pool.query(`
                SELECT * 
                FROM livros
                ORDER BY ano DESC 
            `);

            return resultado;
    }
}