import bcrypt from 'bcrypt';
import { usuarioRepository } from '../repository/usuarioRepository';

export const usuarioController = {

    // Cadastrar usuário
    async cadastrarUsuario(req, res) {
        try {

            const { nome, email, senha } = req.body;
            
            const saltRounds = 10;
            // Gerar hash da senha
            const senhaHash = await bcrypt.hash(senha, saltRounds);

            // Salvar no banco
            await usuarioRepository.cadastrarUsuario(nome, email, senhaHash);

            return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });

        } catch (error) {

            return res.status(500).json({ erro: error.message });
        }
    }
}