# Bingo Mixer — Copilot Instructions

Social bingo game for in-person mixers. Stack: React 19, TypeScript, Vite, Tailwind CSS v4.

## Before every PR — mandatory checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes

## Commands

| Task       | Command         |
| ---------- | --------------- |
| Dev server | `npm run dev`   |
| Build      | `npm run build` |
| Test       | `npm run test`  |
| Lint       | `npm run lint`  |

Tests: Vitest + jsdom + `@testing-library/react` ([setup](../src/test/setup.ts)).

## Architecture

```
src/
  types/index.ts       ← BingoSquareData, BingoLine, GameState
  data/questions.ts    ← Question bank (≥24 items) + FREE_SPACE constant
  utils/bingoLogic.ts  ← Pure fns: generateBoard, toggleSquare, checkBingo, getWinningSquareIds
  hooks/useBingoGame.ts← Game state + localStorage (key: "bingo-game-state", v1)
  components/          ← Presentational only; all props from App.tsx
  App.tsx              ← Composes hook + components; routes 'start'|'playing'|'bingo'
```

Business logic → `utils/bingoLogic.ts`. State → `hooks/useBingoGame.ts`. Components are presentational (no direct state).

## Key constraints

- Board is 5×5 (indices 0–24); index **12** is always FREE SPACE (`isFreeSpace: true`, pre-marked)
- `questions` must have **≥ 24** items; `generateBoard` picks 24 at random
- Tailwind CSS v4 — CSS-first config via `@theme`, no `tailwind.config.js` — see [tailwind-4.instructions.md](instructions/tailwind-4.instructions.md)
- GitHub Pages base path: `/${VITE_REPO_NAME}/game/` (set by CI); use root-relative asset paths

## Workshop

Lab guides in [`workshop/`](../workshop/GUIDE.md). Do not modify unless asked.
