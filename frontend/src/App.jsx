import Dashboard from "./components/dashboard";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("inicio");

  const menu = [
    { id: "inicio", placeholder: "Início", icone: "" },
    { id: "listar", placeholder: "Listar Livros", icone: "" },
    { id: "novo", placeholder: "Novo Livro", icone: "" },
    { id: "ajustes", placeholder: "Ajustes", icone: "" },
  ];

  return (
    <div className="bg-[#050517] grid grid-cols-6 text-white h-screen w-screen">
      <div className="col-span-1 bg-[#111629]">
        <header>
          <nav>
            <h1 className="text-[#28d3ed] mt-10 mb-10 font-bold text-3xl text-center">
              LibManager
            </h1>
            <ul>
              {menu.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`cursor-pointer py-4 text-center font-bold  transition-colors duration-300 ${active === item.id ? 'bg-blue-100 text-black' : ''}`}
                >
                  <a href="#">{item.placeholder}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      <div className="w-full col-span-5">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
