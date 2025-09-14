import "../../index.css";

export default function BotaoCircular({ texto }) {
  return (
    <button className="px-4 py-2 bg-[#740B89] text-white rounded-full hover:bg-[#8A2BE2] transition text-[25px]">
      {texto}
    </button>
  );
}
