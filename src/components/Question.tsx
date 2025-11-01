import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Question as QuestionType } from "../types/question";

type ActiveLifeline = {
  type: "fiftyFifty" | "phone" | "audience";
  forQuestion: number;
} | null;

interface Props {
  data: QuestionType;
  onAnswer: (answer: string) => void;
  activeLifeline: ActiveLifeline;
  setActiveLifeline: Dispatch<SetStateAction<ActiveLifeline>>;
  currentQuestionIdx: number;
}

const Question = ({
  data,
  onAnswer,
  activeLifeline,
  setActiveLifeline,
  currentQuestionIdx,
}: Props) => {
  const [options, setOptions] = useState(data.options);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setOptions(data.options);
    setSelected(null);
  }, [data]);

  useEffect(() => {
    if (
      activeLifeline?.type === "fiftyFifty" &&
      activeLifeline.forQuestion === currentQuestionIdx
    ) {
      const incorrect = data.options.filter(
        (option) => option !== data.correctAnswer
      );
      const removed = incorrect.slice(0, 2);
      setOptions(data.options.filter((option) => !removed.includes(option)));
      setActiveLifeline(null);
    }
  }, [activeLifeline, data, currentQuestionIdx, setActiveLifeline]);

  const handleClick = (opt: string) => {
    setSelected(opt);

    setTimeout(() => {
      onAnswer(opt);
      setSelected(null);
    }, 1000);
  };

  const getButtonClass = (option: string) => {
    if (!selected) {
      return "h-auto py-4 px-6 text-left text-base lg:text-lg font-medium transition-all duration-300 border-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:border-primary hover:scale-[1.02]";
    }

    if (option === selected) {
      const isCorrect = option === data.correctAnswer;
      if (isCorrect) {
        return "h-auto py-4 px-6 text-left text-base lg:text-lg font-medium transition-all duration-300 border-2 rounded-lg bg-green-600 border-green-500 text-white";
      } else {
        return "h-auto py-4 px-6 text-left text-base lg:text-lg font-medium transition-all duration-300 border-2 rounded-lg bg-red-600 border-red-500 text-white";
      }
    }

    return "h-auto py-4 px-6 text-left text-base lg:text-lg font-medium transition-all duration-300 border-2 rounded-lg bg-secondary text-secondary-foreground opacity-50";
  };

  const labels = ["A", "B", "C", "D"];

  return (
    <div className="p-6 lg:p-8 bg-card border-2 border-border rounded-lg">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
            {data.question}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(option)}
              disabled={!!selected}
              className={getButtonClass(option)}
            >
              <span className="font-bold mr-3">{labels[idx]}:</span>
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
