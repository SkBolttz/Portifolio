import BotaoCircular from "./BotaoCircular";

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="bg-[#1E1E1E] w-[484px] h-[592px]">
        <div className="-translate-x-8">
          <h1 className="text-[25px] text-[#F5F5F5] font-bold font-montserrat ml-8 py-8">
            Entre em contato
          </h1>
        </div>

        <div className="w-[430px] h-[90px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 flex items-center hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
          <div className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] ml-4 bg-[#3C2841]">
            <p className="text-[32px]">📧</p>
          </div>
          <div className="ml-6">
            <p className="text-[16px] text-[#B3B3B3] font-montserrat">Email</p>
            <p className="text-[18px] text-[#F5F5F5] font-bold font-montserrat">
              pedrohenriqueborba1@gmail.com
            </p>
          </div>
        </div>

        <div className="w-[430px] h-[90px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 flex items-center hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
          <div className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] ml-4 bg-[#3C2841]">
            <p className="text-[32px]">📱</p>
          </div>
          <div className="ml-6">
            <p className="text-[16px] text-[#B3B3B3] font-montserrat">
              Telefone
            </p>
            <p className="text-[18px] text-[#F5F5F5] font-bold font-montserrat">
              +55 47 9251-2146
            </p>
          </div>
        </div>

        <div className="w-[430px] h-[90px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 flex items-center hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
          <div className="w-[70px] h-[70px] flex items-center justify-center border-[1px] border-[#4F4A4F] rounded-[16px] ml-4 bg-[#3C2841]">
            <p className="text-[32px]">📍</p>
          </div>
          <div className="ml-6">
            <p className="text-[16px] text-[#B3B3B3] font-montserrat">
              Localização
            </p>
            <p className="text-[18px] text-[#F5F5F5] font-bold font-montserrat">
              Blumenau, SC
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-[70px] h-[70px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 mr-6 hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
            <p className="text-[40px] text-[#F5F5F5] font-bold font-montserrat ml-2 -translate-y-4">
              💼
            </p>
          </div>
          <div className="w-[70px] h-[70px] border-[1px] border-[#4F4A4F] rounded-[16px] py-4 mb-6 hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
            <p className="text-[40px] text-[#F5F5F5] font-bold font-montserrat ml-2 -translate-y-4">
              💻
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] w-[484px] h-[592px] border-[1px] border-[#4F4A4F] hover:border-[#8A2BE2] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2">
        <h1 className="text-[25px] text-[#F5F5F5] font-bold font-montserrat ml-8 py-8">
          Envie uma mensagem
        </h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-[20px] text-[#F5F5F5] font-montserrat ml-8"
          >
            Nome
          </label>
          <br />
          <input
            type="text"
            id="name"
            className="mt-4 ml-8 bg-[#2B2B2B] rounded-[8px] w-[400px] h-[40px] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#2B2B2B] text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-[20px] text-[#F5F5F5] font-montserrat ml-8 "
          >
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="mt-4 ml-8 bg-[#2B2B2B] rounded-[8px] w-[400px] h-[40px] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#2B2B2B] text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-[20px] text-[#F5F5F5] font-montserrat ml-8"
          >
            Mensagem
          </label>
          <br />
          <textarea
            id="message"
            className="mt-4 ml-8 bg-[#2B2B2B] rounded-[8px] w-[400px] h-[80px] p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2 focus:ring-offset-[#2B2B2B] text-white"
          />
        </div>

        <div className="flex justify-center mt-4">
          <BotaoCircular texto="Enviar" />
        </div>

        <div className="flex justify-center mt-2">
          <p className="text-[13px] text-[#F5F5F5] font-montserrat">
            * Formulário em desenvolvimento
          </p>
        </div>
      </div>
    </div>
  );
}
