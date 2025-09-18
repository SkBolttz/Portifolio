import Header from "./assets/Components/Header.jsx";
import BotaoCircular from "./assets/Ui/BotaoCircular.jsx";
import GradientMarqueeText from "./assets/Ui/GradientMarqueeText.jsx";
import { BackgroundLines } from "./assets/Ui/BackgroundLinesDemo.jsx";
("use client");
import { CometCard } from "../src/assets/Ui/comet-card.jsx";
import { HoverEffect } from "../src/assets/Ui/card-hover-effect.jsx";
import { softsSkills } from "./assets/Ui/softsSkills.jsx";
import { hardSkills } from "./assets/Ui/hardSkills.jsx";
import { BackgroundGradientDemo } from "./assets/Ui/BackgroundGradientDemo.jsx";
import SplitText from "../src/assets/Ui/SplitText.jsx";
import LogoLoop from "../src/assets/Ui/LogoLoop.jsx";
import CertificadosFront from "../src/assets/Ui/certificadosFront.jsx";
import CertificadosBack from "../src/assets/Ui/certificadosBack.jsx";
import OutrosCertificados from "../src/assets/Ui/outrosCertificados.jsx";
import ContactForm from "../src/assets/Ui/contactForm.jsx";
import Footer from "./assets/Components/Footer.jsx";
import ScrollRevealAvancado from "../src/assets/Ui/ScrollRevealAvancado.jsx";

export function CometCardDemo() {
  return (
    <CometCard className="w-[500px] h-[600px] -translate-y-28">
      <button
        type="button"
        className="my-10 flex w-full flex-col items-stretch rounded-[16px] border-0 bg-transparent p-4 md:my-20 md:p-6 bg-[#3B2740] hover:bg-[#6E3E7D] transition duration-300 ease-in-out rounded-[16px] hover:shadow-[0_0_15px_#8A2BE2] hover:-translate-y-2"
        aria-label="View invite F7RA"
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full w-[calc(100%+6rem)] -translate-x-[0%] -translate-y-[6%]">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-75 translate-y-8"
              alt="Invite background"
              src="./p1.jpeg"
              style={{ boxShadow: "rgba(0,0,0,0.05) 0px 5px 6px 0px" }}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-sm">Hiquez</div>
          <div className="text-sm text-gray-300 opacity-50">#F7RA</div>
        </div>
      </button>
    </CometCard>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={softsSkills} />
    </div>
  );
}

export function CardHoverEffectDemo2() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={hardSkills} />
    </div>
  );
}

export function CardHoverEffectDemo3() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={BackgroundGradientDemo} />
    </div>
  );
}

const imageLogos = [
  { src: "./atom.png", alt: "React" },
  { src: "./css-3.png", alt: "CSS" },
  { src: "./github.png", alt: "github" },
  { src: "./html.png", alt: "html" },
  { src: "./java-script.png", alt: "javascript" },
  { src: "./java.png", alt: "java" },
  { src: "./oracle.png", alt: "oracle" },
  { src: "./springboot.png", alt: "springboot" },
  { src: "./postgre.png", alt: "postgre" },
];

const handleAnimationComplete = () => {};

function App() {
  return (
    <div>
      <div id="inicio">
        <Header />
        <div className="bg-[#3B2740] flex flex-col lg:flex-row items-center justify-between relative px-8 md:px-20 py-16">
          <div className="absolute inset-0 z-0">
            <BackgroundLines svgOptions={{}} />
          </div>

          <div className="relative z-10 flex-1 px-4 lg:px-64 text-center lg:text-left">
            <SplitText
              text="Pedro Henrique"
              className="text-[50px] sm:text-[60px] md:text-[80px] text-[#6E3E7D] font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]"
              delay={100}
              duration={1.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="de Borba"
              className="text-[30px] sm:text-[35px] md:text-[40px] text-[#6E3E7D] font-montserrat"
              delay={200}
              duration={1.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <div className="translate-y-16">
              <h2 className="text-[20px] sm:text-[25px] md:text-[30px] text-white font-bold font-montserrat">
                Desenvolvedor de Software
              </h2>
              <h3 className="text-[30px] sm:text-[40px] md:text-[45px] text-[#A04FB0] font-bold font-montserrat">
                <GradientMarqueeText texto="FullStack" />
              </h3>
              <p className="text-[#B3B3B3] font-montserrat py-4 text-[20px] sm:text-[23px] md:text-[25px]">
                Estudante de Ciências da Computação
              </p>
              <p className="text-[#B3B3B3] font-montserrat text-[20px] sm:text-[23px] md:text-[25px] translate-y-8">
                Atualmente atuando como estagiário na <br /> empresa Phillips
                como suporte técnico.
              </p>
            </div>

            <div className="py-20 mt-32">
              <BotaoCircular texto="Conhecer mais ↓" />
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full lg:w-1/3 flex justify-center mt-12 lg:mt-0">
            <CometCardDemo />
          </div>
        </div>
      </div>

      <div id="skills" className="bg-[#1F1F1F]">
        <div className="flex items-center justify-center relative px-8 md:px-20 py-16">
          <div>
            <h2 className="text-[40px] sm:text-[45px] md:text-[50px] text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]">
              Skills
            </h2>
          </div>
        </div>

        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            padding: "0 10px",
            marginBottom: "-100px",
          }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={64}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0A0A0A"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between px-8 md:px-20 py-16 gap-8 md:gap-0">
          <CardHoverEffectDemo />
          <CardHoverEffectDemo2 />
        </div>
      </div>

      <section id="projetos" className="bg-[#121212]">
        <div className="flex items-center justify-center relative py-14">
          <div className="text-[50px] text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]">
            <h2>Projetos</h2>
          </div>
        </div>
        <div className="flex items-center justify-center relative -translate-z-24">
          <p className="text-[20px] text-[#B3B3B3] font-montserrat">
            Alguns dos projetos que desenvolvi ao longo da minha jornada como
            desenvolvedor
          </p>
        </div>

        <div className="flex justify-center py-14">
          <BackgroundGradientDemo />
        </div>
      </section>

      <div id="certificados">
        <div className="bg-[#1F1F1F]">
          <div className="flex justify-center px-8 md:px-20 py-16">
            <h1 className="text-[50px] text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]">
              🎓 Meus Certificados em Programação 🚀
            </h1>
          </div>
          <div className="flex justify-center mt-10">
            <div className="text-center text-[#B3B3B3] text-sm sm:text-base mt-10 -translate-y-28">
              <p className="text-[20px]">
                Bem-vindo ao meu repositório! Aqui você vai encontrar uma
                coleção dos meus <br /> certificados nas áreas de programação,
                incluindo Front-end, Back-end e muito mais!
                <br />
                Vamos lá? 💻✨
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-full max-w-7xl px-6 mb-20">
              <h2 className="text-3xl md:text-4xl text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2] mb-8 text-center -translate-x-96">
                🌟 Front-end Development
              </h2>
              <div className="w-full text-white text-sm sm:text-base">
                <CertificadosFront />
              </div>
            </div>

            <div className="w-full max-w-7xl px-6 mb-20">
              <h2 className="text-3xl md:text-4xl text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2] mb-8 text-center -translate-x-96">
                🔙 Back-end Development
              </h2>
              <div className="w-full text-white text-sm sm:text-base">
                <CertificadosBack />
              </div>
            </div>

            <div className="w-full max-w-7xl px-6">
              <h2 className="text-3xl md:text-4xl text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2] mb-8 text-center -translate-x-96">
                📚 Outros Certificados
              </h2>
              <div className="w-full text-white text-sm sm:text-base">
                <OutrosCertificados />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contatos">
        <div className="bg-[#1F1F1F] pb-20">
          <div>
            <div className="flex justify-center py-14">
              <h1 className="text-[50px] text-white font-bold font-montserrat drop-shadow-[0_0_15px_#8A2BE2]">
                Contato
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <div className="text-center text-[#B3B3B3] text-sm sm:text-base mt-10 -translate-y-28">
                <p className="text-[32px]">
                  Vamos conversar sobre oportunidades e projetos interessantes
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
