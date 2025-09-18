import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
          Desenvolvido por <span className="font-semibold text-[#A04FB0]">Pedro Henrique de Borba</span>, todos os direitos reservados
        </p>
        <p className="text-xs sm:text-sm md:text-sm lg:text-base mt-2 opacity-80">
          © 2025 - Portfólio Profissional
        </p>
      </div>
    </footer>
  );
}
