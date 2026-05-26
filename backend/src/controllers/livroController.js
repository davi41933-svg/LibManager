import { livroRepository } from "../repository/livroRepository.js";

export const livroController = {

    async listarLivros(req, res) {
        try {
            const resultado = await livroRepository.listarLivros();
            res.status(200).json({ resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao listar livros" });
        }
    },

    async cadastrarLivro(req, res) {
        try {
            const { titulo, autor, ano, disponivel } = req.body;

            await livroRepository.cadastrarLivro(titulo, autor, ano, disponivel);

            return res.status(201).json({ mensagem: "Livro cadastrado com sucesso" });

        } catch (error) {

            console.error(error);
            res.status(500).json({ erro: "Erro ao cadastrar livro" });
        }
    },

}