import { Link } from "react-router-dom";
import "../../index.css";
import Botao from "../Ui/Botao";

export default function Header() {
  return (
    <header className="p-4 bg-gray-100 bg-[#0A010C] py-5">
      <nav className="flex justify-between items-center px-80">
        <div className="text-[30px] text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]">
          Portfólio
        </div>
        <nav className="flex gap-4">
          <Botao texto="Início" />
          <Botao texto="Skills" />
          <Botao texto="Projetos" />
          <Botao texto="Certificados" />
          <Botao texto="Contatos" />
        </nav>
      </nav>
    </header>
  );
}
