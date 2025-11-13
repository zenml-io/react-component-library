# Repository Guidelines

## Project Structure & Module Organization
- `src/components` holds exported UI primitives and composites; colocate component-specific styles in adjacent files and re-export via `src/components.ts`.
- `src/utilities` contains shared hooks, config, and Tailwind helpers; only export surfaced utilities through `src/utilities.ts`.
- `src/index.ts` is the single package entry point. Keep exports tree-shakeable and avoid side effects outside of global styling in `src/index.css`.
- Tests and usage fixtures live in `test/`; Storybook stories and MDX docs belong under `src/docs` to stay close to components.

## Build, Test, and Development Commands
- `pnpm dev` — watch-mode build via tsup for rapid local development.
- `pnpm build` — produces the distributable bundle in `dist/`; run before publishing or cutting a release.
- `pnpm storybook` / `pnpm storybook:build` — develop component demos locally or emit static docs.
- `pnpm lint`, `pnpm format`, `pnpm publint` — enforce ESLint rules, Prettier formatting, and package publishability checks.
- `pnpm test` — execute the Vitest suite in `test/` and any colocated `*.test.ts(x)` files.

## Coding Style & Naming Conventions
- TypeScript, JSX, and CSS follow Prettier defaults (2-space indent, single quotes where practical). Run `pnpm format` before committing.
- Follow Tailwind utility ordering from `tailwind.config.js` and keep custom tokens in `src/tailwind/`.
- Components use PascalCase filenames (`Button.tsx`), hooks use camelCase (`useKeyboardNavigator.ts`), and CSS modules stick to kebab-case.
- Prefer Radix and TanStack primitives already in use; avoid introducing new UI libraries without discussion.

## Testing Guidelines
- Write Vitest specs mirroring the file under test (e.g., `test/button.test.tsx`).
- Snapshot DOM output only for stable components; otherwise assert behavior through user-facing APIs.
- Cover new props, state branches, and accessibility behaviors before opening a PR. Aim for meaningful assertions over numeric coverage targets.

## Commit & Pull Request Guidelines
- Match the existing Conventional Commit style (`type: subject (#PR)`), e.g., `feat: add pagination controls (#123)`.
- Reference the relevant issue or Changeset in the PR body, and include screenshots or Storybook links for visual changes.
- Ensure CI-critical commands (`pnpm test`, `pnpm lint`, `pnpm build`) pass locally; attach the command output summary if CI is flaky.
- For release work, run `pnpm changeset` to record version notes, then `pnpm changeset:version` when batching releases.
