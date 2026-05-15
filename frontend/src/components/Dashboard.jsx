
function Dashboard() {

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

            <tr>
              <td>Refatoring</td>
              <td>Martin Fowler</td>
              <td>1999</td>
              <td>Emprestado</td>
              <td>
                <button className="px-3 py-2 cursor-pointer hover:bg-[#e7318f] transition-colors duration-300 w-30 bg-[#f86cb4] font-semibold">
                  Indisponível
                </button>
              </td>
            </tr>

            <tr>
              <td>Clean Code</td>
              <td>Robert Martin</td>
              <td>2008</td>
              <td>Disponível</td>
              <td>
                <button className="px-3 py-2 cursor-pointer hover:bg-[#e7318f] transition-colors duration-300 w-30 bg-[#f86cb4] font-semibold">
                  Disponível
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
