interface Props {
  earned: number;
  onRestart: () => void;
}

const GameOver = ({ earned, onRestart }: Props) => {
  const prizes = [
    "Gracias por participar",
    "Gracias por participar",
    "Gracias por participar",
    "Mentas para todos",
    "Mentas para todos",
    "Mentas para todos",
    "⁠Bombones",
    "⁠Bombones",
    "⁠Paquete de todito",
    "Sopresa ⁠???",
  ];

  const prize = prizes[earned - 1] || "Gracias por participar";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full p-8 lg:p-12 text-center space-y-6 bg-card border-2 border-border">
        <h2 className="text-4xl lg:text-6xl font-bold text-destructive">
          Game Over
        </h2>
        <p className="text-2xl lg:text-3xl font-semibold text-foreground">
          Ganaste: <span className="font-bold text-accent">{prize}</span>
        </p>
        <button
          onClick={onRestart}
          className="mt-6 px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
};

export default GameOver;
