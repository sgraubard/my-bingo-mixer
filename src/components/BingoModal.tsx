import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Fire from two points
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Sound effect (using Web Audio API)
    const audioContext = new AudioContext();
    const playTone = (frequency: number, duration: number, delay: number) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + duration,
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }, delay);
    };

    // Play a celebratory tune
    playTone(523, 0.2, 0); // C
    playTone(659, 0.2, 150); // E
    playTone(784, 0.3, 300); // G

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-espresso-dark/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-warm-paper rounded-xl p-8 max-w-xs w-full text-center shadow-2xl border-4 border-coffee-stain animate-[bounceIn_0.6s_ease-out] relative">
        {/* Coffee stain decorations */}
        <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-coffee-stain opacity-20 animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-espresso-medium opacity-15 animate-pulse"></div>

        {/* Animated emoji */}
        <div className="text-6xl mb-4 animate-[spin_2s_ease-in-out]">🎉</div>
        <h2 className="text-4xl font-bold text-espresso mb-3 animate-[wiggle_0.5s_ease-in-out]">
          BINGO!
        </h2>
        <p className="text-espresso-medium mb-2 text-lg font-medium">
          You completed a line!
        </p>
        <p className="text-espresso-medium/70 mb-6 text-sm">
          Keep going for more connections! ☕
        </p>

        <button
          onClick={onDismiss}
          className="w-full bg-espresso text-cream font-bold py-3 px-6 rounded-lg shadow-lg border-2 border-espresso-dark hover:bg-espresso-medium hover:scale-105 active:scale-95 active:shadow-md transition-all"
        >
          Keep Playing 🎉
        </button>
      </div>
    </div>
  );
}
