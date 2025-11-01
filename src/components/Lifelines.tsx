import { Phone, Scissors, Users } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";

type ActiveLifeline = { type: "fiftyFifty" | "phone" | "audience"; forQuestion: number } | null;

interface Props {
  used: { fiftyFifty: boolean; phone: boolean; audience: boolean };
  setUsed: Dispatch<SetStateAction<Props["used"]>>;
  setActiveLifeline: Dispatch<SetStateAction<ActiveLifeline>>;
  currentQuestionIdx: number;
}

const Lifelines = ({ used, setUsed, setActiveLifeline, currentQuestionIdx }: Props) => {
  const handleUse = (key: keyof typeof used) => {
    if (!used[key]) {
      setUsed((prev) => ({ ...prev, [key]: true }));
      setActiveLifeline({ type: key as "fiftyFifty" | "phone" | "audience", forQuestion: currentQuestionIdx });
      if (key === "phone") alert("📞 Llama a un amigo para que te ayude");
      if (key === "audience") alert("👥 Consulta con la audincia");
    }
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <button
        disabled={used.fiftyFifty}
        onClick={() => handleUse("fiftyFifty")}
        className={`flex items-center gap-2 px-6 py-6 text-base font-semibold rounded-lg transition-all duration-300 ${
          !used.fiftyFifty 
            ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
            : "bg-primary text-primary-foreground opacity-40 cursor-not-allowed"
        }`}
      >
        <Scissors className="w-5 h-5" /> <span>50/50</span>
      </button>

      <button
        disabled={used.phone}
        onClick={() => handleUse("phone")}
        className={`flex items-center gap-2 px-6 py-6 text-base font-semibold rounded-lg transition-all duration-300 ${
          !used.phone 
            ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
            : "bg-primary text-primary-foreground opacity-40 cursor-not-allowed"
        }`}
      >
        <Phone className="w-4 h-4" /> <span>Telefono</span>
      </button>

      <button
        disabled={used.audience}
        onClick={() => handleUse("audience")}
        className={`flex items-center gap-2 px-6 py-6 text-base font-semibold rounded-lg transition-all duration-300 ${
          !used.audience 
            ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
            : "bg-primary text-primary-foreground opacity-40 cursor-not-allowed"
        }`}
      >
        <Users className="w-4 h-4" /> <span>Audiencia</span>
      </button>
    </div>
  );
};

export default Lifelines;
