import BotaoCircular from "./BotaoCircular";

export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-6 mx-auto px-4 py-8">
      {/* Bloco de Contatos */}
      <div className="bg-[#1E1E1E] w-full md:w-[484px] rounded-[16px] p-6 flex flex-col items-center">
        <h1 className="text-[25px] text-[#F5F5F5] font-bold font-montserrat mb-6 self-start">
          Entre em contato
        </h1>

        {[
          { icon: "📧", label: "Email", value: "pedrohenriqueborba1@gmail.com" },
          { icon: "📱", label: "Telefone", value: "+55 47 9251-2146" },
          { icon: "📍", label: "Localização", value: "Blumenau, SC" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full h-[90px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 flex items-center hover:border-[#8A2BE2] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2"
          >
            <div className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] ml-4 bg-[#3C2841]">
              <p className="text-[32px]">{item.icon}</p>
            </div>
            <div className="ml-6">
              <p className="text-[16px] text-[#B3B3B3] font-montserrat">{item.label}</p>
              <p className="text-[18px] text-[#F5F5F5] font-bold font-montserrat">
                {item.value}
              </p>
            </div>
          </div>
        ))}

        {/* Redes Sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/SkBolttz"
            target="_blank"
            className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] hover:border-[#8A2BE2] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2 text-[40px] text-[#F5F5F5]"
          >
            💼
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-borba-627493229/"
            target="_blank"
            className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] hover:border-[#8A2BE2] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2 text-[40px] text-[#F5F5F5]"
          >
            💻
          </a>
        </div>
      </div>

      {/* Bloco do Formulário */}
      <div className="bg-[#1E1E1E] w-full md:w-[484px] rounded-[16px] p-6 border-[1px] border-[#4F4A4F] hover:border-[#8A2BE2] transition duration-300 ease-in-out hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
        <h1 className="text-[25px] text-[#F5F5F5] font-bold font-montserrat mb-6">
          Envie uma mensagem
        </h1>

        {[
          { id: "name", label: "Nome", type: "text" },
          { id: "email", label: "Email", type: "email" },
        ].map((input, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={input.id} className="text-[20px] text-[#F5F5F5] font-montserrat block mb-2">
              {input.label}
            </label>
            <input
              type={input.type}
              id={input.id}
              className="w-full bg-[#2B2B2B] rounded-[8px] h-[40px] p-2 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#2B2B2B] text-white"
            />
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="message" className="text-[20px] text-[#F5F5F5] font-montserrat block mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            className="w-full h-[80px] p-2 bg-[#2B2B2B] rounded-[8px] resize-none focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#2B2B2B] text-white"
          />
        </div>

        <div className="flex justify-center mt-4">
          <BotaoCircular texto="Enviar" />
        </div>

        <p className="text-[13px] text-[#F5F5F5] font-montserrat text-center mt-2">
          * Formulário em desenvolvimento
        </p>
      </div>
    </div>
  );
}
