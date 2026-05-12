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
        <div className="w-16"></div>
      </header>

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
