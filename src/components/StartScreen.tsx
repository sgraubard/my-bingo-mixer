interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold text-espresso mb-3 drop-shadow-sm">
          Bingo Mixer
        </h1>
        <p className="text-xl text-espresso-medium mb-8 font-medium">
          Find your people!
        </p>

        <div className="bg-warm-paper rounded-lg p-6 shadow-md border-2 border-latte-dark mb-8 relative">
          {/* Coffee stain decoration */}
          <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-coffee-stain opacity-10"></div>
          <h2 className="font-semibold text-espresso text-xl mb-4">
            How to play
          </h2>
          <ul className="text-left text-espresso-dark text-sm space-y-3 leading-relaxed">
            <li>☕ Find people who match the questions</li>
            <li>☕ Tap a square when you find a match</li>
            <li>☕ Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-espresso text-cream font-bold py-4 px-8 rounded-lg text-lg shadow-lg border-2 border-espresso-dark hover:bg-espresso-medium active:shadow-md transition-all"
        >
          Start Brewing ☕
        </button>
      </div>
    </div>
  );
}
