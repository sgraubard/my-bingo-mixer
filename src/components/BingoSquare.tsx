import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
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
      // Winning: Deep coffee brown with warm glow
      stateClasses =
        'bg-coffee-stain text-cream border-espresso shadow-lg ring-2 ring-coffee-stain-dark ring-opacity-50';
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
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-coffee-stain-dark text-base font-bold">
          ✓
        </span>
      )}
    </button>
  );
}
