export default function CertificadosBack() {
  const certificadosBack = [
    {
      nome: "Java: criando a sua primeira aplicação",
      instituicao: "Alura",
      data: "Setembro 2024",
      link: "https://cursos.alura.com.br/certificate/9f693147-521b-4d4a-b1e9-b82a89bea411?lang",
    },
    {
      nome: "Java: Aplicando a Orientação a Objetos",
      instituicao: "Alura",
      data: "Outubro 2024",
      link: "https://cursos.alura.com.br/certificate/84b3975b-929c-4552-b03d-2defc066c080?lang",
    },
    {
      nome: "Java: Trabalhando Com Listas e Coleções de Dados",
      instituicao: "Alura",
      data: "Novembro 2024",
      link: "https://cursos.alura.com.br/certificate/51b09f42-b7b0-4cab-8645-585333400e8b?lang",
    },
    {
      nome: "Lógica de programação: mergulhe em programação com JavaScript",
      instituicao: "Alura",
      data: "Setembro 2024",
      link: "https://cursos.alura.com.br/user/hiquez/course/logica-programacao-mergulhe-programacao-javascript/certificate",
    },
    {
      nome: "Lógica de programação: explore funções e listas",
      instituicao: "Alura",
      data: "Setembro  2024",
      link: "https://cursos.alura.com.br/certificate/dead503e-727f-4265-95ab-ad8fb0490d15?lang",
    },
    {
      nome: "Java: consumindo API, gravando arquivos e lidando com erros",
      instituicao: "Alura",
      data: "Novembro 2024",
      link: "https://cursos.alura.com.br/user/hiquez/course/java-consumindo-api-gravando-arquivos-lidando-erros/certificate",
    },
    {
      nome: "Imersão Dev Back-End",
      instituicao: "Alura",
      data: "Dezembro 2024",
      link: "x",
    },
    {
      nome: "Começando em Programação: carreira e primeiros passos",
      instituicao: "Alura",
      data: "Janeiro 2025",
      link: "https://cursos.alura.com.br/user/hiquez/course/comecando-programacao-carreira-primeiros-passos/certificate",
    },
    {
      nome: "Java: trabalhando com lambdas, streams e Spring Framework",
      instituicao: "Alura",
      data: "Janeiro 2025",
      link: "https://cursos.alura.com.br/certificate/56371ba7-3d78-413b-9352-1fc0905d46df?lang",
    },
    {
      nome: "Java: Aplicando a Orientação a Objetos",
      instituicao: "Alura",
      data: "Outubro 2025",
      link: "https://cursos.alura.com.br/certificate/84b3975b-929c-4552-b03d-2defc066c080?lang",
    },
    {
      nome: "Java: persistência de dados e consultas com Spring Data JPA",
      instituicao: "Alura",
      data: "Fevereiro  2025",
      link: "https://cursos.alura.com.br/user/hiquez/course/java-persistencia-dados-consultas-spring-data-jpa/certificate",
    },
    {
      nome: "Java: criando sua primeira API e conectando ao front",
      instituicao: "Alura",
      data: "Fevereiro  2025",
      link: "https://cursos.alura.com.br/certificate/70dcadc1-9208-48b2-94d1-74abc5cca178?lang",
    },
    {
      nome: "Spring Boot 3: desenvolva uma API Rest em Java",
      instituicao: "Alura",
      data: "Fevereiro  2025",
      link: "https://cursos.alura.com.br/certificate/68af9484-07f2-4e25-91e6-175f6751d6c6?lang",
    },
    {
      nome: "Spring Boot 3: aplique boas práticas e proteja uma API Rest",
      instituicao: "Alura",
      data: "Fevereiro   2025",
      link: "https://cursos.alura.com.br/certificate/b9c2914a-571b-4d9e-a926-f0d47fac70df?lang",
    },
    {
      nome: "Spring Boot 3: documente, teste e prepare uma API para o deploy",
      instituicao: "Alura",
      data: "Fevereiro  2025",
      link: "https://cursos.alura.com.br/certificate/d7181982-8466-48b8-b8c5-eb4f134dc79f?lang",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#1C1C1C] px-6">
      <div className="flex items-center px-4 py-2 text-white border-b border-[#3B2740] font-bold bg-[#2C222F] rounded-t-xl hover:bg-[#3B2740] transition duration-300 ease-in-out">
        <p className="w-2/3">Nome do Certificado</p>
        <p className="w-1/6">Instituição</p>
        <p className="w-1/6">Data</p>
        <p className="w-1/6">Link</p>
      </div>

      {certificadosBack.map((cert, index) => (
        <div
          key={index}
          className="flex items-center px-4 py-2 text-white border-t border-[#3B2740] hover:bg-[#3B2740] transition duration-300 ease-in-out"
        >
          <p className="font-bold text-[#B3B3B3] w-2/3">{cert.nome}</p>{" "}
          <p className="text-[#B3B3B3] w-1/6">{cert.instituicao}</p>
          <p className="text-[#B3B3B3] w-1/6">{cert.data}</p>
          {cert.link?.trim() && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/6 text-[#740B89]"
            >
              🔗 Ver Certificado
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
