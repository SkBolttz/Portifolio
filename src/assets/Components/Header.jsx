import { Link } from "react-router-dom";
import "../../index.css";
import Botao from "../Ui/Botao";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#6E3E7D] py-5">
        <nav className="flex justify-between items-center px-80">
          <div className="text-[30px] text-black font-bold font-montserrat">
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
      <div className="pt-16 " />
    </>
  );
}
