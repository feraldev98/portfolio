import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

function TerminalHeader() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  }

  return (
    <div className="border-b border-primary text-sm w-full h-8 grid grid-cols-[60%_40%] gap-2 px-4">
      <div className="flex gap-8 w-full col-span-1 xl:text-lg lg:text-md md:text-md text-xs items-center justify-between text-center">
        <span className="flex gap-1 items-center">FERAL BIOS (TM)</span>
        <span className="flex gap-1 items-center">(c) 2026 FERAL</span>
        <span className="flex gap-1 items-center">VER 0.0.1</span>
        <span className="flex gap-1 items-center">SYS: ONLINE</span>
      </div>
      <div className="grid grid-cols-2 text-sm ml-auto text-right gap-6 items-center px-4">
        <span className="text-md">PORT: 8080</span>
        <div className="flex gap-1 items-center justify-center">
          <button onClick={toggleLanguage} className="text-xl items-center justify-center hover:drop-shadow-[0_0_20px_rgb(56,189,248)] hover:text-sky-300 transition-colors duration-300 hover:scale-110 hover:cursor-pointer">
            <ArrowLeft size={20} />
          </button>
          <span className="text-md">LANG: { language === "es" ? "🇪🇸" : "🇬🇧" }</span>
          <button onClick={toggleLanguage} className="text-xl items-center justify-center hover:drop-shadow-[0_0_20px_rgb(56,189,248)] hover:text-sky-300 transition-colors duration-300 hover:scale-110 hover:cursor-pointer">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TerminalHeader;
