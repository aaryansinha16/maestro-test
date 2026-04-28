# Project Context — maestro-test

## Stack

CommonJS Node.js project. No TypeScript despite the `typecheck` script (no
`tsconfig.json` exists; running `tsc --noEmit` would fail). No ESLint config
either (running `eslint .` would fail). Only the `test` gate is reliable today,
and `autonomy.json` correctly lists `test` as the sole quality gate.

### Scripts

- `test`: `node --test test.js` — uses Node's built-in test runner
- `lint`: `eslint .` — **non-functional** (no eslint config or dependency)
- `typecheck`: `tsc --noEmit` — **non-functional** (no tsconfig, not a TS project)

### Runtime / dependencies

- Node.js (built-in `node:test` module → requires Node 18+)
- No `node_modules`, no `package-lock.json`, no declared dependencies

## Top-level layout

- `index.js` — single module, exports `add(a, b)`
- `test.js` — single test asserting `add(1, 2) === 3`
- `package.json` — minimal, no deps

## Conventions

- Code style: CommonJS (`module.exports`, `require`); single-line module bodies;
  no semicolons at line ends; arrow functions preferred for short utilities
- Commit format: conventional commits (`chore:`, `feat:`, `fix:`) — observed
  from the only existing project commit `chore: maestro init`
- Test patterns: Node's built-in `node:test`; one assertion per `test()` block;
  thrown `Error` on failure (no `assert` library)

## Project-specific NEVER list

_None established yet._

## Notes for future sessions

- This appears to be a deliberately tiny test project for exercising Maestro
  itself; the broken `add()` was a seeded bug for the first session
- If new functionality is added, prefer keeping the file count small and the
  CommonJS style consistent until a clear reason to migrate emerges
- The `lint` and `typecheck` scripts should either be wired up properly (add
  configs and devDependencies) or removed from `package.json` to avoid
  misleading future quality-gate decisions
