import Header from "./assets/Components/Header.jsx";
import BotaoCircular from "./assets/Ui/BotaoCircular.jsx";
import ParticulaMouse from "./assets/Ui/ParticulaMouse.jsx";

function App() {
  return (
    <div className="container-global">
      <div className="header">
        <Header />
      </div>
      <div className="p-4 bg-gray-100 bg-gradient-to-b from-[#4B0E57] to-[#1f031f]  py-15 flex items-center px-80">
        <div>
          <h1 className="text-[100px] text-white font-bold font-montserrat py-10px drop-shadow-[0_0_15px_#8A2BE2]">
            Pedro <br />
            Henrique
          </h1>
          <h2 className="text-[60px] text-white font-montserrat p-6px py-10">
            de Borba
          </h2>
          <div>
            <h2 className="text-[30px] text-white font-bold font-montserrat p-6px">
              Desenvolvedor de Software
            </h2>
            <h3 className="text-[45px] text-[#A04FB0] font-bold font-montserrat p-6px">
              FullStack
            </h3>
            <p className="text-[#B3B3B3] font-montserrat py-4 text-[25px]">
              Estudante de Ciências da Computação
            </p>
            <p className="text-[#B3B3B3] font-montserrat text-[25px]">
              Atualmente atuando como estagiário em Phillips <br />
              como suporte técnico.
            </p>
            <div className="py-20">
              <BotaoCircular texto="Conhecer mais ↓" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
