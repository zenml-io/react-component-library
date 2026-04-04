# ZenML Design System — LLM Implementation Guide

> **This is the single source of truth for generating ZenML UI.** ZenML customizes shadcn/ui — stock shadcn props will produce incorrect output. Read this before writing any component code.

## shadcn → ZenML Mapping (Critical)

| shadcn pattern          | ZenML equivalent                        | Notes                                      |
| ----------------------- | --------------------------------------- | ------------------------------------------ |
| `variant="default"`     | `emphasis="bold" intent="primary"`      | Button uses emphasis + intent, not variant |
| `variant="destructive"` | `emphasis="bold" intent="danger"`       | "danger" not "destructive"                 |
| `variant="outline"`     | `emphasis="subtle"`                     | Subtle = bordered/outline style            |
| `variant="ghost"`       | `emphasis="minimal"`                    | Minimal = no border, no background         |
| `variant="secondary"`   | `emphasis="bold" intent="secondary"`    | Secondary is an intent, not a variant      |
| `size="default"`        | `size="sm"`                             | ZenML default is sm, not default           |
| `size="icon"`           | `className="size-7 p-0"` + `aria-label` | No icon size variant — compose manually    |
| `<Input size="sm" />`   | `<Input inputSize="sm" />`              | Prop is `inputSize` to avoid HTML conflict |

## Component Props (from source CVA definitions)

### Button

| Prop       | Values                             | Default   |
| ---------- | ---------------------------------- | --------- |
| `emphasis` | `bold` · `subtle` · `minimal`      | `bold`    |
| `intent`   | `primary` · `secondary` · `danger` | `primary` |
| `size`     | `sm` · `md` · `lg`                 | `sm`      |
| `asChild`  | boolean                            | —         |

Sizes: sm=`h-6`, md=`h-7`, lg=`h-8`

### Badge

| Prop      | Values                                                                                                                                         | Default  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `color`   | `green` · `yellow` · `light-purple` · `purple` · `blue` · `light-grey` · `grey` · `red` · `orange` · `lime` · `teal` · `turquoise` · `magenta` | `purple` |
| `size`    | `xs` · `sm` · `md`                                                                                                                             | `md`     |
| `rounded` | boolean                                                                                                                                        | `true`   |

### Tag

| Prop       | Values                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| `color`    | `grey` · `purple` · `green` · `yellow` · `red` · `blue` · `teal` · `lime` · `magenta` · `turquoise` · `orange` | —       |
| `emphasis` | `bold` · `subtle` · `minimal`                                                                                  | —       |
| `size`     | `sm` · `xs`                                                                                                    | `sm`    |
| `rounded`  | boolean                                                                                                        | `true`  |

### Input

| Prop        | Values             | Default |
| ----------- | ------------------ | ------- |
| `inputSize` | `sm` · `md` · `lg` | `md`    |

### Sheet (SheetContent)

| Prop   | Values                              | Default |
| ------ | ----------------------------------- | ------- |
| `side` | `top` · `bottom` · `left` · `right` | `right` |

### Avatar

| Prop   | Values                                   | Default   |
| ------ | ---------------------------------------- | --------- |
| `type` | `square` · `rounded`                     | `rounded` |
| `size` | `xs` · `sm` · `md` · `lg` · `xl` · `xxl` | `lg`      |

### Box

| Prop      | Values    | Default   |
| --------- | --------- | --------- |
| `variant` | `default` | `default` |

## Semantic Tokens

**Text:** `text-theme-text-{primary|secondary|tertiary|negative|brand|error|warning|success}`
**Surfaces:** `bg-theme-surface-{primary|secondary|tertiary|strong}`
**Borders:** `border-theme-border-{minimal|moderate|bold}`

Use semantic tokens by default. Fall back to palette colors only when semantic doesn't fit.

## Palette Colors

11 families, each with shades `900 800 700 600 500 400 300 200 100 50 25`:
`primary` · `neutral` · `error` · `warning` · `success` · `blue` · `teal` · `turquoise` · `lime` · `magenta` · `orange`

Usage: `bg-primary-500`, `text-error-600`, `border-neutral-300`

Note: neutral also has `000` (white).

## Typography

| Scale   | Classes                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| Body    | `text-text-xs` 12px · `text-text-sm` 14px · `text-text-md` 16px · `text-text-lg` 18px · `text-text-xl` 20px                |
| Display | `text-display-xs` 24px · `text-display-sm` 30px · `text-display-md` 36px · `text-display-lg` 48px · `text-display-xl` 60px |

## Spacing

Custom scale (not default Tailwind): `0`=0px · `0.25`=2px · `0.5`=4px · `1`=8px · `2`=12px · `3`=16px · `4`=20px · `5`=24px · `6`=32px · `7`=40px · `8`=48px · `9`=64px · `10`=72px · `11`=80px · `12`=96px

## Border Radius

`rounded-sharp` 0px · `rounded-sm` 4px · `rounded-md` 8px · `rounded-rounded` 9999px (pill)

## Shadows

`shadow-sm` — subtle drop shadow · `shadow-inner` — inset shadow (used by active Tabs)

## Import Patterns

```tsx
// Server components (no "use client" needed)
import {
	Button,
	Badge,
	Tag,
	Input,
	Box,
	Spinner,
	Skeleton
} from "@zenml-io/react-component-library/components/server";

// Client components (interactive, require "use client" in Next.js)
import {
	Dialog,
	Select,
	Sheet,
	Tabs,
	Form,
	Table
} from "@zenml-io/react-component-library/components/client";

// Utilities
import { cn } from "@zenml-io/react-component-library";

// Tailwind preset (in tailwind.config)
import { zenmlPreset } from "@zenml-io/react-component-library";
```

### cn() Utility

Always use `cn()` for conditional/dynamic classes. Never use template literals for class composition.

```tsx
<div className={cn("p-4 rounded-md", isActive && "bg-primary-500")} />
```

## Component Inventory

**Server components** (`server.ts`): Box, Tag, Badge, Button, Input, Spinner, Skeleton, Table (static), ProgressItems, Breadcrumb, Separator

**Client components** (`client.ts`): Sidebar, Avatar, Dropdown, Sheet, Tabs, Collapsible, Tooltip, Checkbox, Toast, Dialog, ProgressBar, Select, Switch, AlertDialog, ScrollArea, HoverCard, RadioGroup, Command, Popover, Accordion, Calendar, Drawer, Form, Slider, Sonner

## Common Mistakes

| Mistake                                        | Fix                                                  |
| ---------------------------------------------- | ---------------------------------------------------- |
| `variant="destructive"`                        | `emphasis="bold" intent="danger"`                    |
| `variant="outline"`                            | `emphasis="subtle"`                                  |
| `variant="ghost"`                              | `emphasis="minimal"`                                 |
| `<Input size="sm" />`                          | `<Input inputSize="sm" />`                           |
| `<Badge variant="success">`                    | `<Badge color="green">`                              |
| Hardcoded colors `#333`                        | `text-theme-text-primary`                            |
| `rounded-full`                                 | `rounded-rounded`                                    |
| Default Tailwind spacing `p-4`=16px            | ZenML `p-4`=20px (custom scale)                      |
| Missing `"use client"` for Dialog/Select/etc   | Add directive at top of file                         |
| Template literal classes `` `text-${color}` `` | Use `cn()` with explicit conditions                  |
| Importing from wrong path                      | Check server.ts vs client.ts exports                 |
| Using Lucide/Heroicons                         | Use Untitled UI icons (stroke-based, `currentColor`) |
| Creating custom components                     | Use library components first, ask before creating    |
| `size="icon"` on Button                        | `className="size-7 p-0"` + `aria-label`              |

## Project Setup

```js
// tailwind.config.js
import { zenmlPreset } from "@zenml-io/react-component-library";
export default {
	presets: [zenmlPreset],
	content: ["./src/**/*.{js,ts,jsx,tsx}"]
};
```

```tsx
// App entry point
import "@zenml-io/react-component-library/dist/index.css";
```
