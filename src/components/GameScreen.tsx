import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  // Calculate stats
  const markedCount = board.filter(
    (sq) => sq.isMarked && !sq.isFreeSpace,
  ).length;
  const totalSquares = 24; // Excluding free space
  const progressPercent = Math.round((markedCount / totalSquares) * 100);

  return (
    <div className="flex flex-col min-h-full">
      {/* Header - Wood grain effect */}
      <header className="flex items-center justify-between p-3 bg-gradient-to-r from-espresso to-espresso-medium border-b-4 border-coffee-stain-dark shadow-md">
        <button
          onClick={onReset}
          className="text-cream text-sm px-3 py-1.5 rounded bg-espresso-dark hover:bg-espresso active:bg-espresso-dark transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-bold text-cream text-xl">Bingo Mixer</h1>
        <div className="text-cream text-sm font-bold">
          {markedCount}/{totalSquares}
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-warm-paper-alt px-4 py-2 border-b border-latte-dark">
        <div className="flex items-center justify-between text-xs text-espresso-medium mb-1">
          <span>
            🤝 People met:{' '}
            <strong className="text-espresso">{markedCount}</strong>
          </span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-latte-dark rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-coffee-stain to-espresso-medium transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Instructions - Menu board aesthetic */}
      <p className="text-center text-espresso-medium text-sm py-3 px-4 bg-warm-paper-alt border-b border-latte-dark italic">
        ☕ Tap a square when you find someone who matches it
      </p>

      {/* Bingo indicator - Coffee celebration */}
      {hasBingo && (
        <div className="bg-coffee-stain text-cream text-center py-3 font-bold text-base shadow-inner border-y-2 border-coffee-stain-dark">
          ☕ FRESH BREW! You got a line! ☕
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
