import { Link } from "react-router-dom";
import "../../index.css";
import Botao from "../Ui/Botao";
import TextType from "../Ui/TextType";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#6E3E7D] py-3">
        <nav className="flex justify-between px-80">
          <TextType
            text={[
              "Transformando ideias em código.",
              "Criando soluções que fazem a diferença.",
            ]}
            typingSpeed={75}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
            className="text-[32px] text-[#121212] font-bold font-montserrat"
          />
          <nav className="flex gap-4">
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
          </nav>
        </nav>
      </header>
      <div className="pt-16 " />
    </>
  );
}
