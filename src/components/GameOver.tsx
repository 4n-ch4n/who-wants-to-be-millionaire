interface Props {
  earned: number;
  onRestart: () => void;
}

const GameOver = ({ earned, onRestart }: Props) => {
  const prize =
    [
      "$0",
      "$1,000",
      "$2,000",
      "$3,000",
      "$5,000",
      "$10,000",
      "$16,000",
      "$20,000",
      "$32,000",
      "$40,000",
      "$64,000",
      "$80,000",
      "$125,000",
      "$250,000",
      "$500,000",
      "$1,000,000",
    ][earned] || "$0";

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
