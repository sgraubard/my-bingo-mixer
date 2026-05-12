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

## Design Guide

### Visual Design Principles

- **Fun & Engaging**: Use vibrant colors, smooth animations, and playful interactions to create an energetic mixer atmosphere
- **Clear Hierarchy**: Bingo board should be the focal point; use size, color, and spacing to guide attention
- **Touch-Friendly**: Minimum 44×44px tap targets; generous spacing between interactive elements
- **Instant Feedback**: Provide immediate visual/haptic feedback on all interactions (square toggles, button clicks)

### Component Styling

- **BingoSquare**:
  - Clear distinction between marked/unmarked states (color, border, icon)
  - Free space should be visually distinct but harmonious
  - Smooth transition animations (~200ms)
  - Text should be legible at all sizes (min 14px)
- **Buttons**:
  - Primary actions: High contrast, prominent placement
  - Secondary actions: Subdued but discoverable
  - Disabled states: Clear visual indication

- **Modal/Overlay**:
  - Semi-transparent backdrop for context
  - Clear close affordances
  - Animation: fade in backdrop, slide/scale in content

### Color & Theme

- Use Tailwind's CSS-first `@theme` configuration (see [tailwind-4.instructions.md](instructions/tailwind-4.instructions.md))
- Maintain WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI elements)
- Consider color-blind safe palettes
- Use semantic color tokens (e.g., `--color-success`, `--color-primary`)

### Responsive Design

- Mobile-first approach (game will primarily be played on phones)
- Board should fill viewport efficiently on all screen sizes
- Typography scales with viewport (use `clamp()` or Tailwind responsive utilities)
- Test on narrow devices (320px) and tablets (768px+)

### Accessibility

- All interactive elements must be keyboard accessible
- Provide `aria-label` for icon-only buttons
- Use semantic HTML (`<button>`, `<main>`, `<header>`)
- Focus indicators must be clearly visible
- Screen reader announcements for game state changes

### Animation Guidelines

- Use `prefers-reduced-motion` media query to disable/reduce animations
- Keep animations purposeful and quick (150-300ms)
- Celebrate wins with delightful but not overwhelming effects
- Use CSS transitions over JavaScript animations when possible

## Workshop

Lab guides in [`workshop/`](../workshop/GUIDE.md). Do not modify unless asked.
