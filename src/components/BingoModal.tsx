interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-espresso-dark/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-warm-paper rounded-xl p-8 max-w-xs w-full text-center shadow-2xl border-4 border-coffee-stain animate-[fadeIn_0.4s_ease-out] relative">
        {/* Coffee stain decorations */}
        <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-coffee-stain opacity-20"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-espresso-medium opacity-15"></div>

        <div
          className="text-6xl mb-4 animate-[steamRise_1s_ease-out]"
          style={{ animationName: 'pulse' }}
        >
          ☕
        </div>
        <h2 className="text-4xl font-bold text-espresso mb-3">Fresh Brew!</h2>
        <p className="text-espresso-medium mb-6 text-lg font-medium">
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className="w-full bg-espresso text-cream font-bold py-3 px-6 rounded-lg shadow-lg border-2 border-espresso-dark hover:bg-espresso-medium active:shadow-md transition-all"
        >
          Keep Playing ☕
        </button>
      </div>
    </div>
  );
}
