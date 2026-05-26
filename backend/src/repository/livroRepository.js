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
    },

    // Cadastrar livro
    async cadastrarLivro(titulo, autor, ano, disponivel) {
        const [resultado] = await pool.query(`
            INSERT INTO livros (
            titulo,
            autor,
            ano,
            disponivel
            ) VALUES (?, ?, ?, ?)`, [titulo, autor, ano, disponivel]);

        return resultado;
    }
}