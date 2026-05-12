import type { BingoSquareData } from '../types';
import { playMarkSound } from '../utils/soundEffects';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const handleClick = () => {
    if (!square.isFreeSpace) {
      playMarkSound();
    }
    onClick();
  };

  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded transition-all duration-200 select-none min-h-[60px] text-xs leading-tight shadow-sm';

  // Coffee shop themed states
  let stateClasses = '';

  if (square.isFreeSpace) {
    // Free space: "On the house" coffee stain aesthetic
    stateClasses =
      'bg-espresso text-cream border-espresso-dark font-bold text-sm shadow-md';
  } else if (square.isMarked) {
    if (isWinning) {
      // Winning: Glowing gold/yellow highlight with animation
      stateClasses =
        'bg-gradient-to-br from-yellow-300 to-amber-400 text-espresso-dark border-yellow-500 shadow-xl ring-4 ring-yellow-400/50 animate-pulse font-bold scale-105';
    } else {
      // Marked: Latte cream with coffee stain border
      stateClasses = 'bg-latte border-coffee-stain-dark text-espresso-dark';
    }
  } else {
    // Unmarked: Warm paper texture
    stateClasses =
      'bg-warm-paper border-latte-dark text-espresso hover:bg-cream active:bg-latte';
  }

  return (
    <button
      onClick={handleClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className={`absolute top-0.5 right-0.5 text-base font-bold ${
            isWinning ? 'text-espresso-dark text-xl' : 'text-coffee-stain-dark'
          }`}
        >
          {isWinning ? '🎉' : '✓'}
        </span>
      )}
    </button>
  );
}
