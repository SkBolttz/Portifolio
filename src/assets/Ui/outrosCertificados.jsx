export default function OutrosCertificados() {
  const outrosCertificados = [
    {
      nome: "Git e GitHub: compartilhando e colaborando em projetos",
      instituicao: "Alura",
      data: "Outubro 2024",
      link: "https://cursos.alura.com.br/user/hiquez/course/git-github-compartilhando-colaborando-projetos/certificate",
    },
    {
      nome: "Modelagem de dados: desenvolvendo o modelo lógico",
      instituicao: "Alura",
      data: "Dezembro 2024",
      link: "https://cursos.alura.com.br/user/hiquez/course/modelagem-dados-desenvolvendo-modelo-logico/certificate",
    },
    {
      nome: "Modelagem de dados: identificando entidades, atributos, relacionamentos",
      instituicao: "Alura",
      data: "Dezembro 2024",
      link: "https://cursos.alura.com.br/user/hiquez/course/modelagem-dados-entidades-atributos-relacionamentos/certificate",
    },
    {
      nome: "Modelagem de dados: aplicando a normalização",
      instituicao: "Alura",
      data: "Janeiro 2025",
      link: "https://cursos.alura.com.br/user/hiquez/course/modelagem-dados-aplicando-normalizacao/certificate",
    },
    {
      nome: "Modelagem de dados: construindo o modelo físico",
      instituicao: "Alura",
      data: "Janeiro 2025",
      link: "https://cursos.alura.com.br/user/hiquez/course/modelagem-dados-construindo-modelo-fisico/certificate",
    },
    {
      nome: "CURSO ORACLE 2025 COMPLETO - SQL PL/SQL",
      instituicao: "Udemy",
      data: "Realizando",
      link: "pendente",
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

      {outrosCertificados.map((cert, index) => (
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
          {cert.link?.trim() &&
          cert.link !== "x" &&
          cert.link !== "pendente" ? (
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
