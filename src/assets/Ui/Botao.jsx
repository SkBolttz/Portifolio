import "../../index.css";

export default function Botao({ texto }) {
  return (
    <button className="px-4 py-2 bg-[#410E4B] text-white rounded hover:bg-[#8A2BE2] transition">
      {texto}
    </button>
  );
}
