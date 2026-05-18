import { livroRepository } from "../repository/livro.repository";

export const livroController = {

    async listarLivros(req, res) {

        try {

            const [resultado] = await livroRepository.listarLivros();

            res.status(200).json({ resultado });

        } catch (error) {

            console.error(error);

            res.status(500).json({ erro: "Erro ao listar livros" });
        }
    }
}