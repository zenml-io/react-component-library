---
name: zenml-prototype
description: Create working ZenML UI prototypes from ideas or Figma designs. Triggers on "prototype this", "build a quick UI for", "show me alternatives for", "implement this design", or any UI exploration task.
---

# ZenML UI Prototyping

Create working React prototypes using ZenML's component library and design system.

## References

Before generating any code, load these references:

- `references/design-tokens.md` — Complete token and component props reference
- `references/composition-patterns.md` — Compound component structure and page templates

## Workflow

**From idea/problem:**

1. Clarify the problem (1-2 questions max)
2. Generate 2-3 alternatives as working components
3. Write components to `src/examples/`
4. Iterate based on feedback

**From Figma design:**

1. Extract URL from user (format: `https://figma.com/design/:fileKey/:fileName?node-id=X-Y`)
2. Get design context: `mcp__figma__get_design_context` or `mcp__figma__get_screenshot`
3. Map Figma elements to ZenML components
4. Implement as working component
5. Iterate based on feedback

**URL parsing:** For `?node-id=1-2`, use `nodeId: "1:2"`

## Output Format

Write each prototype to `src/examples/[FeatureName].tsx`. For alternatives: `FeatureName.tsx`, `FeatureNameAlt1.tsx`, `FeatureNameAlt2.tsx`.

```tsx
"use client"; // Only if using interactive components

import { Button, Badge } from "@zenml-io/react-component-library/components/server";
import { Dialog, Select } from "@zenml-io/react-component-library/components/client";
import { cn } from "@zenml-io/react-component-library";

type Props = { /* Minimal props for the prototype */ };

export function FeatureName({ ...props }: Props) {
  return (
    // Implementation using ZenML components + design tokens
  );
}
```

## Icons

Use [Untitled UI](https://www.untitledui.com/icons) icons only. Stroke-based SVGs, `currentColor`, 24x24 viewBox.

```tsx
<svg
	className={cn("size-5", className)}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="..."
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	/>
</svg>
```

NEVER use Lucide, Heroicons, FontAwesome, or other icon libraries.

## Quality Checklist

| Check               | Rule                                                                    |
| ------------------- | ----------------------------------------------------------------------- |
| Button props        | `emphasis`/`intent`/`size`, NOT `variant`                               |
| Input sizing        | `inputSize` prop, NOT `size`                                            |
| Icon buttons        | MUST have `aria-label`                                                  |
| Data/numbers        | MUST use `tabular-nums`                                                 |
| Headings            | MUST use `text-balance`                                                 |
| Body text           | SHOULD use `text-pretty`                                                |
| Empty states        | MUST have one clear action                                              |
| Destructive actions | MUST use `AlertDialog`                                                  |
| Class logic         | MUST use `cn()` utility                                                 |
| Semantic tokens     | Use `theme-text-*`, `theme-surface-*`, `theme-border-*` over raw colors |
| Spacing             | Remember custom scale (`p-4`=20px, `p-3`=16px)                          |

## Generating Alternatives

| Alternative | Focus                                                |
| ----------- | ---------------------------------------------------- |
| Default     | Most likely solution based on requirements           |
| Alt1        | Different layout/structure                           |
| Alt2        | Different interaction pattern or information density |

Briefly explain what's different about each when presenting them.

## Iteration

After showing prototypes:

- Ask which direction to pursue
- Make specific adjustments as requested
- Avoid over-engineering — prototypes should be minimal and focused
