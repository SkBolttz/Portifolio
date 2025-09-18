import "../../index.css";

export default function Botao({ texto }) {
  return (
    <button className="relative px-6 py-2 rounded-full text-[#7E27C8] bg-[#000404] overflow-hidden transition-colors duration-400 hover:bg-[#AC46FF] hover:text-white">
      <span
        className="absolute inset-0 rounded-full animate-gradient-slow pointer-events-none"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />
      <span className="relative">{texto}</span>
    </button>
  );
}
