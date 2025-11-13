# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **React component library** published to npm as `@zenml-io/react-component-library`. It provides reusable UI components built with Radix UI primitives and styled with Tailwind CSS, following the ZenML design system.

## Development Commands

```bash
pnpm install           # Install dependencies (uses pnpm)
pnpm dev              # Watch mode for development
pnpm build            # Build the library (ESM + CJS)
pnpm test             # Run unit tests with Vitest
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm storybook        # Start Storybook dev server (port 6006)
pnpm storybook:build  # Build Storybook for deployment
pnpm publint          # Validate package for npm publishing
```

## Architecture

### Build System

The library uses **tsup** to build multiple entry points:

- `src/index.ts` - Main entry (exports all utilities, tailwind config, and components)
- `src/components.ts` - All components (re-exports client + server)
- `src/components/client.ts` - Client-only components (marked with `"use client"`)
- `src/components/server.ts` - Server-compatible components
- `src/utilities.ts` - Utility functions (like `cn()` for className merging)
- `src/tailwind.ts` - Tailwind plugin and preset for the ZenML design system

**Output formats**: Both CommonJS (`.cjs`) and ESM (`.js`) with TypeScript declarations.

### Component Structure

Components follow a consistent pattern:

```
src/components/
  ComponentName/
    ComponentName.tsx       # Implementation
    ComponentName.stories.tsx  # Storybook stories
    index.tsx              # Re-exports from ComponentName.tsx
```

**Key patterns**:
- Built on **Radix UI** primitives for accessibility
- Styled with **Tailwind CSS** using the ZenML design system
- Use `class-variance-authority` (CVA) for variant management
- Use `cn()` utility (custom tailwind-merge + clsx) for className composition
- Support `asChild` prop pattern (via Radix Slot) for composition
- All components are `forwardRef` wrapped for ref forwarding

### Client vs Server Components

**Client components** (`src/components/client.ts`):
- Interactive components requiring React hooks or browser APIs
- Examples: Sidebar, Dropdown, Dialog, Tooltip, Toast
- Marked with `"use client"` directive for Next.js compatibility

**Server components** (`src/components/server.ts`):
- Non-interactive, server-renderable components
- Examples: Box, Tag, Badge, Button, Input, Spinner, Skeleton

### Design System

The **ZenML Tailwind plugin** (`src/tailwind/index.ts`) provides:
- **Color system**: Custom color scales (primary, neutral, error, warning, success, blue, teal, turquoise, lime, magenta, orange)
- **Semantic tokens**: `theme.text.*`, `theme.surface.*`, `theme.border.*`
- **Typography scale**: `text-xs` to `text-xl`, `display-xs` to `display-xl`
- **Spacing scale**: 0 to 12 (0px to 96px)
- **Border radius**: `sharp`, `sm`, `md`, `rounded`

**Usage**: Import `zenmlPreset` and use as a Tailwind preset to get the full design system.

### Utilities

The `cn()` function (`src/utilities/index.ts`) is a custom merge of:
1. **clsx** - Conditional className composition
2. **tailwind-merge** - Deduplicates conflicting Tailwind classes

Extended with custom class groups for ZenML's design system font sizes.

## Release Process

This library uses **Changesets** for versioning and publishing:

```bash
pnpm changeset              # Create a new changeset (documents changes)
pnpm changeset:version      # Bump version and update CHANGELOG
pnpm changeset:publish      # Publish to npm (runs build automatically)
```

**Workflow**:
1. Make changes to components
2. Run `pnpm changeset` and describe your changes (patch/minor/major)
3. Commit the changeset file (`.changeset/*.md`)
4. PR is merged to `main`
5. GitHub Actions runs `changeset:version` and `changeset:publish`

**Important**:
- Base branch is `main` (configured in `.changeset/config.json`)
- Package is published as `public` to npm
- The `prepublishOnly` script ensures the library is built before publishing

## Testing

- **Unit tests**: Vitest (currently minimal setup in `vitest.config.ts`)
- **Visual testing**: Storybook stories for all components
- **Type checking**: TypeScript with strict mode enabled

## Component Development Best Practices

1. **Follow existing patterns**: Look at `Button` or `Badge` components as reference
2. **Use CVA for variants**: Define variants with `class-variance-authority`
3. **Support composition**: Add `asChild` prop for components that render a single element
4. **TypeScript types**: Extend appropriate HTML element types (`ButtonHTMLAttributes`, etc.)
5. **Storybook stories**: Create stories showing all variants and states
6. **Accessibility**: Leverage Radix UI primitives for ARIA compliance
7. **Design system tokens**: Use semantic tokens (`theme.text.*`) over direct colors when possible

## Common Patterns

### Creating a new component

```typescript
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../utilities/index";

export const componentVariants = cva(
  "base-classes",
  {
    variants: {
      size: { sm: "...", md: "...", lg: "..." },
      intent: { primary: "...", secondary: "..." }
    },
    defaultVariants: { size: "sm", intent: "primary" }
  }
);

export interface ComponentProps
  extends HTMLAttributes<HTMLDivElement>,
          VariantProps<typeof componentVariants> {}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ size, intent, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(componentVariants({ size, intent }), className)}
      {...rest}
    />
  )
);

Component.displayName = "Component";
export { Component };
```

### Exporting components

1. Add to `src/components/ComponentName/index.tsx`:
   ```typescript
   export * from "./ComponentName";
   ```

2. Add to `src/components/client.ts` OR `src/components/server.ts`:
   ```typescript
   export * from "./ComponentName";
   ```

3. If it's a client component, add `"use client"` at the top of the implementation file

## Storybook

Storybook is configured with:
- **Vite** as the bundler
- **Addon themes** for dark/light mode testing
- Custom wrapper (`AppShell`) that includes ZenML design system styles
- Stories use `.stories.tsx` extension

The built Storybook is deployed to GitHub Pages for visual documentation.

## Package Manager

This project uses **pnpm** (NOT npm or yarn). Always use `pnpm` commands.
