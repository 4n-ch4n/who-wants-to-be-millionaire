interface Props {
  earned: number;
}

const ScoreBoard = ({ earned }: Props) => {
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

  return (
    <div className="h-full p-4 lg:p-6 overflow-y-auto">
      <h3 className="text-xl font-bold text-center mb-6 text-primary">Premios</h3>
      <div className="space-y-2">
        {prizes.slice().reverse().map((prize, idx) => {
          const rank = prizes.length - idx;
          const isActive = earned === rank;
          const isPassed = earned > rank;
          const isFuture = earned < rank;
          
          return (
            <div
              key={rank}
              className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                isActive && "bg-primary text-primary-foreground border-primary scale-105 shadow-lg"
              } ${
                isPassed && "bg-muted/50 text-muted-foreground border-muted"
              } ${
                isFuture && "bg-secondary text-secondary-foreground border-border"
              }`}
            >
              <span className="font-mono text-sm lg:text-base font-bold opacity-90">{rank}</span>
              <span className="font-bold text-base lg:text-lg">{prize}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreBoard;
