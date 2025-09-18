import "../../index.css";

export default function BotaoCircular({ texto }) {
  return (
    <button className="relative w-full max-w-[350px] h-[50px] px-6 rounded-full text-white bg-[#000404] overflow-hidden transition-colors duration-300 hover:bg-[#AC46FF] hover:text-white">
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#741C68] via-[#4E0D81] to-[#8A2BE2] animate-gradient-slow pointer-events-none"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />
      <span className="relative">{texto}</span>
    </button>
  );
}
