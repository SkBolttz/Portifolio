export default function Certificados() {
  const certificadosFront = [
    {
      nome: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
      instituicao: "Alura",
      data: "Dezembro 2024",
      link: "https://cursos.alura.com.br/certificate/cdd52ccd-d42d-48f3-acc7-d4ef0b147c19?lang",
    },
    {
      nome: "HTML e CSS: Classes, posicionamento e Flexbox",
      instituicao: "Alura",
      data: "Dezembro 2024",
      link: "https://cursos.alura.com.br/certificate/acbe1f40-b509-4e11-9e87-eb0f38a8b9f4?lang",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#1C1C1C] px-4 sm:px-6 lg:px-8 py-4 mb-8 rounded-xl">
      <div className="hidden sm:flex items-center px-4 py-2 text-white border-b border-[#3B2740] font-bold bg-[#2C222F] rounded-t-xl">
        <p className="w-2/3">Nome do Certificado</p>
        <p className="w-1/6">Instituição</p>
        <p className="w-1/6">Data</p>
        <p className="w-1/6">Link</p>
      </div>

      {certificadosFront.map((cert, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center px-4 py-3 text-white border-t border-[#3B2740] hover:bg-[#3B2740] transition duration-300 ease-in-out rounded-lg"
        >
          <p className="font-bold text-[#B3B3B3] sm:w-2/3 w-full">
            {cert.nome}
          </p>
          <p className="text-[#B3B3B3] sm:w-1/6 w-full mt-1 sm:mt-0">
            {cert.instituicao}
          </p>
          <p className="text-[#B3B3B3] sm:w-1/6 w-full mt-1 sm:mt-0">
            {cert.data}
          </p>
          {cert.link?.trim() && cert.link !== "x" ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/6 w-full mt-1 sm:mt-0 text-[#740B89] hover:underline"
            >
              🔗 Ver Certificado
            </a>
          ) : (
            <p className="sm:w-1/6 w-full mt-1 sm:mt-0 text-[#B3B3B3] italic">
              Não disponível
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
