import { Link } from "react-router-dom";
import "../../index.css";
import Botao from "../Ui/Botao";
import TextType from "../Ui/TextType";

export default function Header() {
  return (
    <>
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-[#6E3E7D] py-3">
        <nav className="flex flex-col md:flex-row md:justify-between items-center md:px-20 px-4 gap-3">
          <TextType
            text={[
              "Transformando ideias em código.",
              "Criando soluções que fazem a diferença.",
            ]}
            typingSpeed={75}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
            className="text-[24px] sm:text-[28px] md:text-[32px] text-[#121212] font-bold font-montserrat text-center md:text-left"
          />

          <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 mt-2 md:mt-0">
            <a href="#inicio">
              <Botao texto="Início" />
            </a>
            <a href="#skills">
              <Botao texto="Skills" />
            </a>
            <a href="#projetos">
              <Botao texto="Projetos" />
            </a>
            <a href="#certificados">
              <Botao texto="Certificados" />
            </a>
            <a href="#contatos">
              <Botao texto="Contatos" />
            </a>
          </div>
        </nav>
      </header>
      <div className="pt-20 md:pt-16" />
    </>
  );
}
