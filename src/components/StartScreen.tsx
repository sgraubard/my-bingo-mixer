interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-warm-paper via-warm-paper-alt to-latte opacity-60"></div>

        {/* Floating coffee steam wisps */}
        <div
          className="absolute top-[10%] left-[15%] w-16 h-16 rounded-full bg-coffee-stain opacity-10 blur-xl"
          style={{ animation: 'steam 4s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-[20%] right-[20%] w-20 h-20 rounded-full bg-coffee-stain opacity-10 blur-xl"
          style={{ animation: 'steam 5s ease-in-out infinite 1s' }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[10%] w-12 h-12 rounded-full bg-espresso-medium opacity-10 blur-xl"
          style={{ animation: 'steam 3.5s ease-in-out infinite 0.5s' }}
        ></div>

        {/* Rotating coffee bean decorations */}
        <div
          className="absolute top-8 right-8 text-coffee-stain opacity-20 text-4xl"
          style={{ animation: 'rotate 20s linear infinite' }}
        >
          ☕
        </div>
        <div
          className="absolute bottom-12 left-8 text-coffee-stain opacity-15 text-3xl"
          style={{ animation: 'rotate 25s linear infinite reverse' }}
        >
          ☕
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-3xl px-4">
        {/* Hero Section - Animated Title */}
        <div className="mb-12">
          <h1 className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span
              className="text-espresso drop-shadow-lg font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                animation: 'fadeInUp 0.6s ease-out',
              }}
            >
              Bingo
            </span>
            <span
              className="text-espresso font-bold"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                animation: 'fadeInUp 0.6s ease-out 0.15s',
                animationFillMode: 'backwards',
              }}
            >
              Mixer
            </span>
          </h1>

          {/* Decorative coffee stain underline */}
          <div
            className="mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-coffee-stain to-transparent rounded-full"
            style={{
              animation: 'fadeIn 0.8s ease-out 0.3s',
              animationFillMode: 'backwards',
            }}
          ></div>

          <p
            className="text-espresso-medium font-medium mt-4"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              animation: 'fadeInUp 0.6s ease-out 0.45s',
              animationFillMode: 'backwards',
            }}
          >
            Find your people! ☕
          </p>
        </div>

        {/* How to Play - Interactive Cards */}
        <div className="mb-12">
          <h2
            className="text-espresso text-2xl font-bold mb-6"
            style={{
              animation: 'fadeIn 0.5s ease-out 0.6s',
              animationFillMode: 'backwards',
            }}
          >
            How to Play
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Card 1: Find */}
            <div
              className="bg-cream border-2 border-latte-dark rounded-lg p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-coffee-stain"
              style={{
                animation: 'slideInLeft 0.5s ease-out 0.7s',
                animationFillMode: 'backwards',
              }}
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-espresso font-bold text-lg mb-2">Find</h3>
              <p className="text-espresso-dark text-sm leading-relaxed">
                Look for people who match the questions on your card
              </p>
            </div>

            {/* Card 2: Tap */}
            <div
              className="bg-cream border-2 border-latte-dark rounded-lg p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-coffee-stain"
              style={{
                animation: 'slideInLeft 0.5s ease-out 0.9s',
                animationFillMode: 'backwards',
              }}
            >
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-espresso font-bold text-lg mb-2">Tap</h3>
              <p className="text-espresso-dark text-sm leading-relaxed">
                Mark a square when you find someone with that trait
              </p>
            </div>

            {/* Card 3: Win */}
            <div
              className="bg-cream border-2 border-latte-dark rounded-lg p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-coffee-stain"
              style={{
                animation: 'slideInLeft 0.5s ease-out 1.1s',
                animationFillMode: 'backwards',
              }}
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-espresso font-bold text-lg mb-2">Win</h3>
              <p className="text-espresso-dark text-sm leading-relaxed">
                Get 5 in a row (any direction) to complete your card!
              </p>
            </div>
          </div>
        </div>

        {/* Game Preview Teaser */}
        <div
          className="mb-12"
          style={{
            animation: 'fadeInUp 0.6s ease-out 1.3s',
            animationFillMode: 'backwards',
          }}
        >
          <div
            className="inline-block bg-warm-paper border-2 border-latte-dark rounded-lg p-6 shadow-lg"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <p className="text-espresso-medium font-semibold text-sm mb-4">
              Your card will look like this:
            </p>
            {/* Mini 3x3 preview grid */}
            <div className="grid grid-cols-3 gap-1.5 w-full max-w-xs mx-auto">
              {/* Sample squares */}
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                has a pet
              </div>
              <div className="bg-latte border-2 border-coffee-stain-dark rounded text-espresso-dark text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight relative">
                plays video games
                <span className="absolute top-0.5 right-0.5 text-coffee-stain-dark text-base font-bold">
                  ✓
                </span>
              </div>
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                loves cooking
              </div>
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                speaks 2+ languages
              </div>
              <div className="bg-espresso border-2 border-espresso-dark rounded text-cream text-xs p-2 min-h-[50px] flex items-center justify-center text-center font-bold shadow-md">
                FREE SPACE
              </div>
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                does yoga
              </div>
              <div className="bg-latte border-2 border-coffee-stain-dark rounded text-espresso-dark text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight relative">
                loves spicy food
                <span className="absolute top-0.5 right-0.5 text-coffee-stain-dark text-base font-bold">
                  ✓
                </span>
              </div>
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                has a garden
              </div>
              <div className="bg-warm-paper border-2 border-latte-dark rounded text-espresso text-xs p-2 min-h-[50px] flex items-center justify-center text-center leading-tight">
                is left-handed
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="space-y-3"
          style={{
            animation: 'fadeInUp 0.6s ease-out 1.5s',
            animationFillMode: 'backwards',
          }}
        >
          <button
            onClick={onStart}
            className="relative w-full max-w-md mx-auto bg-gradient-to-br from-espresso to-coffee-stain text-cream font-bold py-5 px-10 rounded-lg text-lg shadow-lg border-2 border-espresso-dark hover:scale-105 active:scale-100 transition-all duration-200 overflow-hidden"
            style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            {/* Steam animation overlay */}
            <span
              className="absolute -top-2 left-1/4 text-xl opacity-60"
              style={{ animation: 'steam 2s ease-in-out infinite' }}
            >
              ☕
            </span>
            <span
              className="absolute -top-2 right-1/4 text-xl opacity-60"
              style={{ animation: 'steam 2s ease-in-out infinite 0.5s' }}
            >
              ☕
            </span>

            <span className="relative z-10">Start Brewing ☕</span>
          </button>
          <p className="text-espresso-medium text-sm italic">
            Get your card ready ☕
          </p>
        </div>
      </div>
    </div>
  );
}
