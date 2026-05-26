import axios from 'axios';

// Cofiguração do axios
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

// Caminhos que chegam do backend
export const getLivros = async () => {
    const { data } = await api.get('/livros');
    return data.resultado;
};