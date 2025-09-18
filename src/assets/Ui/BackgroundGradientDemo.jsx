"use client";
import React from "react";
import { BackgroundGradient } from "../Ui/background-gradient.jsx";

export function BackgroundGradientDemo() {
  const cards = [
    {
      title: "Sistema de Coworking",
      description:
        "Portal de gerenciamento de coworkings com agendamento, cancelamento e remarcação de reservas de salas, controle de acesso, histórico de uso, visualização de atividades e administração completa de usuários.",
      img: "./Coworking-hall.jpg",
      buttonText: "Ver projeto",
      link: "https://nexuscoworking.vercel.app/",
    },
    {
      title: "Controle de Reembolso Corporativo",
      description:
        "Sistema para solicitação e gerenciamento de reembolsos corporativos com cadastro de usuários, acompanhamento de status e controle de comprovantes.",
      img: "./Reembolso-hall.png",
      buttonText: "Ver projeto",
      link: "https://meu-projeto-suporte.com",
    },
    {
      title: "Portal do Paciente",
      description:
        "Portal do Paciente com recursos para agendamento, cancelamento e remarcação de consultas, acesso ao histórico de atendimentos, visualização de resultados de exames e consulta a prescrições médicas.",
      img: "./PortalPaciente-Hall.jpg",
      buttonText: "Ver projeto",
      link: "https://meu-projeto-delivery.com",
    },
  ];

  return (
    <div className="flex flex-wrap gap-64 justify-center items-stretch">
      {cards.map((card, index) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between w-full"
          style={{ minHeight: "500px" }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="object-contain h-72 w-full rounded-lg"
          />

          <div className="mt-4 flex-1">
            <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
              {card.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {card.description}
            </p>
          </div>

          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold bg-[#040304] hover:bg-zinc-700 transition"
          >
            <span>{card.buttonText}</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white"></span>
          </a>
        </BackgroundGradient>
      ))}
    </div>
  );
}
    // #040304 Padrao.
    // #000404