import "./App.css";
import { useState } from "react";
import { questions } from "./data/questions";
import Lifelines from "./components/Lifelines";
import Question from "./components/Question";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";

function App() {
  // Select a group of questions
  const questionsGroup = questions[2];
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [earned, setEarned] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [usedLifelines, setUsedLifelines] = useState({
    fiftyFifty: false,
    phone: false,
    audience: false,
  });

  const [activeLifeline, setActiveLifeline] = useState<{
    type: "fiftyFifty" | "phone" | "audience";
    forQuestion: number;
  } | null>(null);

  const handleAnswer = (answer: string) => {
    const current = questionsGroup[currentQuestionIdx];
    if (answer !== current.correctAnswer) {
      setGameOver(true)
      return;
    };
    setEarned((prev) => prev + 1);

    if (currentQuestionIdx === questionsGroup.length - 1) {
      setGameOver(true)
      return;
    };
    setCurrentQuestionIdx((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setEarned(0);
    setGameOver(false);
    setUsedLifelines({ fiftyFifty: false, phone: false, audience: false });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-4xl space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary tracking-tight">
              Quien Quiere Ser Millonario?
            </h1>
            <p className="text-muted-foreground text-lg">
              Pregunta {currentQuestionIdx + 1} de {questionsGroup.length}
            </p>
          </div>
        </div>
        <main className="w-full max-w-[1280px] mx-auto px-5 py-7 flex flex-col lg:flex-row gap-7 items-start box-border">
          {gameOver ? (
            <div className="flex-1 mx-auto max-w-md">
              <GameOver earned={earned} onRestart={handleRestart} />
            </div>
          ) : (
            <>
              <div className="flex-1 w-full min-w-0">
                <div className="flex gap-3 mb-3 justify-center">
                  <Lifelines
                    used={usedLifelines}
                    setUsed={setUsedLifelines}
                    setActiveLifeline={setActiveLifeline}
                    currentQuestionIdx={currentQuestionIdx}
                  />
                </div>
                <Question
                  data={questionsGroup[currentQuestionIdx]}
                  onAnswer={handleAnswer}
                  activeLifeline={activeLifeline}
                  setActiveLifeline={setActiveLifeline}
                  currentQuestionIdx={currentQuestionIdx}
                />
              </div>
              <div className="lg:w-80 bg-card border-t lg:border-t-0 lg:border-l border-border rounded-lg">
                <ScoreBoard earned={earned} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
