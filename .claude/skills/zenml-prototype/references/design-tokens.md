# ZenML Design Tokens & Component Props Reference

Complete reference extracted from source code. When in doubt, these values are authoritative.

## Semantic Tokens

| Category | Token     | Tailwind Class                 | Maps To             |
| -------- | --------- | ------------------------------ | ------------------- |
| Text     | primary   | `text-theme-text-primary`      | primary-900         |
| Text     | secondary | `text-theme-text-secondary`    | neutral-500         |
| Text     | tertiary  | `text-theme-text-tertiary`     | neutral-400         |
| Text     | negative  | `text-theme-text-negative`     | neutral-000 (white) |
| Text     | brand     | `text-theme-text-brand`        | primary-500         |
| Text     | error     | `text-theme-text-error`        | error-500           |
| Text     | warning   | `text-theme-text-warning`      | warning-500         |
| Text     | success   | `text-theme-text-success`      | success-500         |
| Surface  | primary   | `bg-theme-surface-primary`     | neutral-000 (white) |
| Surface  | secondary | `bg-theme-surface-secondary`   | neutral-050         |
| Surface  | tertiary  | `bg-theme-surface-tertiary`    | neutral-100         |
| Surface  | strong    | `bg-theme-surface-strong`      | primary-400         |
| Border   | minimal   | `border-theme-border-minimal`  | neutral-100         |
| Border   | moderate  | `border-theme-border-moderate` | neutral-200         |
| Border   | bold      | `border-theme-border-bold`     | neutral-500         |

## Palette Colors

11 families × 11 shades (900→025):

| Family      | Hue             | Use For                    |
| ----------- | --------------- | -------------------------- |
| `primary`   | purple 258-260° | Brand, actions, links      |
| `neutral`   | grey 215-221°   | Text, backgrounds, borders |
| `error`     | red 3-4°        | Errors, destructive        |
| `warning`   | orange 32-33°   | Warnings, caution          |
| `success`   | green 137°      | Success, completed         |
| `blue`      | 208-209°        | Info, selected states      |
| `teal`      | 180°            | Category accent            |
| `turquoise` | 189-192°        | Category accent            |
| `lime`      | 96°             | Category accent            |
| `magenta`   | 337-338°        | Category accent            |
| `orange`    | 19°             | Category accent            |

Shade scale: `900` `800` `700` `600` `500` `400` `300` `200` `100` `050`/`50` `025`/`25`

Usage: `bg-primary-500`, `text-error-700`, `border-teal-100`

## Typography

| Class             | Size | Line Height                |
| ----------------- | ---- | -------------------------- |
| `text-text-xs`    | 12px | 18px                       |
| `text-text-sm`    | 14px | 20px                       |
| `text-text-md`    | 16px | 24px                       |
| `text-text-lg`    | 18px | 28px                       |
| `text-text-xl`    | 20px | 30px                       |
| `text-display-xs` | 24px | 32px                       |
| `text-display-sm` | 30px | 38px                       |
| `text-display-md` | 36px | 44px (tracking: -0.045rem) |
| `text-display-lg` | 48px | 60px (tracking: -0.06rem)  |
| `text-display-xl` | 60px | 72px                       |

## Spacing (Custom Scale)

| Key    | Value | Key  | Value |
| ------ | ----- | ---- | ----- |
| `0`    | 0px   | `6`  | 32px  |
| `0.25` | 2px   | `7`  | 40px  |
| `0.5`  | 4px   | `8`  | 48px  |
| `1`    | 8px   | `9`  | 64px  |
| `2`    | 12px  | `10` | 72px  |
| `3`    | 16px  | `11` | 80px  |
| `4`    | 20px  | `12` | 96px  |
| `5`    | 24px  |      |       |

**Warning:** This replaces default Tailwind spacing. `p-4` = 20px (not 16px).

## Border Radius

| Class             | Value         |
| ----------------- | ------------- |
| `rounded-sharp`   | 0px           |
| `rounded-sm`      | 4px           |
| `rounded-md`      | 8px           |
| `rounded-rounded` | 9999px (pill) |

## Component Props (Complete)

### Button

| Prop       | Values                               | Default   |
| ---------- | ------------------------------------ | --------- |
| `emphasis` | `bold` · `subtle` · `minimal`        | `bold`    |
| `intent`   | `primary` · `secondary` · `danger`   | `primary` |
| `size`     | `sm` (h-6) · `md` (h-7) · `lg` (h-8) | `sm`      |
| `asChild`  | boolean                              | false     |

Compound variant examples:

- Primary bold: `bg-primary-500 text-white`
- Primary subtle: `border border-primary-400 text-primary-600`
- Primary minimal: `text-primary-600` (no bg, no border)
- Danger bold: `bg-error-600 text-white`
- Secondary bold: `bg-neutral-200 text-theme-text-primary`

### Badge

| Prop      | Values                                                                                                                                         | Default  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `color`   | `green` · `yellow` · `light-purple` · `purple` · `blue` · `light-grey` · `grey` · `red` · `orange` · `lime` · `teal` · `turquoise` · `magenta` | `purple` |
| `size`    | `xs` · `sm` (h-5) · `md` (h-6)                                                                                                                 | `md`     |
| `rounded` | `true` (pill) · `false` (rounded-sm)                                                                                                           | `true`   |

Color mapping: green→success, yellow→warning, red→error, purple→primary, blue→blue, grey→neutral

### Tag

| Prop       | Values                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| `color`    | `grey` · `purple` · `green` · `yellow` · `red` · `blue` · `teal` · `lime` · `magenta` · `turquoise` · `orange` | —       |
| `emphasis` | `bold` · `subtle` · `minimal`                                                                                  | —       |
| `size`     | `sm` (h-6) · `xs` (h-5)                                                                                        | `sm`    |
| `rounded`  | `true` (pill) · `false` (sm/md)                                                                                | `true`  |

Emphasis behavior:

- **bold**: solid bg, white text (e.g., `bg-primary-400 text-theme-text-negative`)
- **subtle**: light bg + border (e.g., `bg-primary-25 border-primary-100 text-theme-text-brand`)
- **minimal**: border only (e.g., `border-theme-border-moderate text-theme-text-brand`)

### Input

| Prop        | Values                               | Default |
| ----------- | ------------------------------------ | ------- |
| `inputSize` | `sm` (h-6) · `md` (h-7) · `lg` (h-8) | `md`    |

**Important:** The prop is `inputSize`, not `size` (avoids HTML attribute conflict).

### Avatar

| Prop   | Values                                                                             | Default   |
| ------ | ---------------------------------------------------------------------------------- | --------- |
| `type` | `square` (rounded-md) · `rounded` (pill)                                           | `rounded` |
| `size` | `xs` (12px) · `sm` (20px) · `md` (24px) · `lg` (28px) · `xl` (36px) · `xxl` (48px) | `lg`      |

Sub-components: `Avatar`, `AvatarImage`, `AvatarFallback`

### Box

| Prop      | Values    | Default   |
| --------- | --------- | --------- |
| `variant` | `default` | `default` |

Renders: `border rounded-md border-theme-border-moderate bg-theme-surface-primary`

### Sheet (SheetContent)

| Prop   | Values                              | Default |
| ------ | ----------------------------------- | ------- |
| `side` | `top` · `bottom` · `left` · `right` | `right` |

## cn() Utility

```tsx
import { cn } from "@zenml-io/react-component-library";

// Conditional classes
<div className={cn("p-4 rounded-md", isActive && "bg-primary-500")} />

// Merging variant classes (handles Tailwind conflicts)
<Button className={cn(buttonVariants({ intent, emphasis }), className)} />
```

Custom tailwind-merge config handles ZenML font-size tokens (`text-text-*`, `text-display-*`).
