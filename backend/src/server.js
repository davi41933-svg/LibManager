import express from 'express'
import cors from 'cors'
import livroRoutes from './routes/livroRoutes.js'
import usuarioRoutes from './routes/usuarioRoutes.js';

// Config do servidor
const app = express();

app.use(express.json());
app.use(cors());

// Rotas  
app.use(livroRoutes);
app.use(usuarioRoutes);


// Ligar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`)
});