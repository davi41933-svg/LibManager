import { useLivros } from "../hooks/useLivros.js";

export function Dashboard() {
  const { data: livros, isLoading, isError } = useLivros();

  return (
    <div>
      <div className="h-20 flex items-center justify-center shadow-lg">
        <h1 className="font-bold text-3xl text-[#28d3ed] text-center">
          DASHBOARD DO BIBLIOTECÁRIO
        </h1>
      </div>

      <div className="m-20 border-[#26e588]">
        <table className="w-full h-50 bg-[#111629] border-t-4 grid-cols-5">
          <thead className=" bg-[#20283a] text-[#28d3ed] h-12 shadow-lg">
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody className="text-center font-bold ">
            {isLoading && (
              <tr>
                <td>Carregando...</td>
              </tr>
            )}

            {isError && (
              <tr>
                <td>Erro ao carregar livros.</td>
              </tr>
            )}

            {livros?.map((livro) => (
              <tr key={livro.id}>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.ano}</td>
                <td>{livro.disponivel ? "Disponível" : "Emprestado"}</td>
                <td>
                  <button className="px-3 py-2 cursor-pointer hover:bg-[#e7318f] transition-colors duration-300 w-30 bg-[#f86cb4] font-semibold">
                    {livro.disponivel ? "Disponível" : "Indisponível"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
