import { useQuery } from '@tanstack/react-query';
import { getLivros } from '../api/api';


export function useLivros() {
    return useQuery({
        queryKey: ['livros'], // Identificar + cache
        queryFn: getLivros // Buscar os dados
    });
}