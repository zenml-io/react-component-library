# ZenML Composition Patterns

Correct compound component structure and page-level templates. All examples use actual ZenML imports, props, and semantic tokens.

---

## Part A: Compound Component Composition

### 1. Dialog

DialogHeader includes a built-in close button. Body content goes between header and footer as a plain div.

```tsx
"use client";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter
} from "@zenml-io/react-component-library/components/client";
import { Button } from "@zenml-io/react-component-library/components/server";

<Dialog open={open} onOpenChange={setOpen}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Create Pipeline</DialogTitle>
		</DialogHeader>
		<div className="px-5 py-3 space-y-3">{/* Body content */}</div>
		<DialogFooter>
			<Button intent="secondary" emphasis="subtle" onClick={() => setOpen(false)}>
				Cancel
			</Button>
			<Button intent="primary" emphasis="bold">
				Create
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>;
```

**Key details:**

- `DialogHeader` class: `flex items-center justify-between border-b border-theme-border-moderate py-2 pl-5 pr-3`
- `DialogFooter` class: `flex justify-end border-t border-theme-border-moderate px-5 py-3`
- `DialogContent` max-width: `max-w-lg`, background: `bg-theme-surface-primary`
- Close button is auto-rendered inside `DialogHeader`

### 2. Select

SelectItem supports an optional `description` prop for secondary text.

```tsx
"use client";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from "@zenml-io/react-component-library/components/client";

<Select value={value} onValueChange={setValue}>
	<SelectTrigger className="w-[200px]">
		<SelectValue placeholder="Select stack" />
	</SelectTrigger>
	<SelectContent>
		<SelectItem value="default" description="For quick experiments">
			Default Stack
		</SelectItem>
		<SelectItem value="production" description="Full orchestration">
			Production Stack
		</SelectItem>
	</SelectContent>
</Select>;
```

**Key details:**

- `SelectTrigger` class: `rounded-md bg-transparent px-2 py-1 text-text-sm`
- `SelectContent` uses `bg-theme-surface-primary` with animation
- `SelectItem` checked state: `data-[state=checked]:bg-primary-50`
- Wrap in `SelectGroup` with `SelectLabel` for grouped items

### 3. Table

Wrap Table in a bordered container div. Table renders inside its own overflow-auto wrapper.

```tsx
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell
} from "@zenml-io/react-component-library/components/server";
import { Badge } from "@zenml-io/react-component-library/components/server";

<div className="rounded-md border border-theme-border-moderate">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Name</TableHead>
				<TableHead>Status</TableHead>
				<TableHead className="text-right">Duration</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow>
				<TableCell className="font-medium">training-pipeline</TableCell>
				<TableCell>
					<Badge color="green" size="sm">
						Completed
					</Badge>
				</TableCell>
				<TableCell className="text-right tabular-nums">2m 34s</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</div>;
```

**Key details:**

- `Table` base: `w-full text-text-sm` (wrapped in `overflow-auto`)
- `TableHead` height: `h-8`, padding: `px-4 py-2`, `font-medium`
- `TableCell` height: `h-9`, padding: `px-4 py-2`
- `TableRow` has `border-b` and `hover:bg-muted/50`
- Always use `tabular-nums` for numeric data columns

### 4. Tabs

TabsContent renders with a bordered container. TabsTrigger uses inner shadow for active state.

```tsx
"use client";
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent
} from "@zenml-io/react-component-library/components/client";

<Tabs defaultValue="overview">
	<TabsList>
		<TabsTrigger value="overview">Overview</TabsTrigger>
		<TabsTrigger value="configuration">Configuration</TabsTrigger>
		<TabsTrigger value="runs">Runs</TabsTrigger>
	</TabsList>
	<TabsContent value="overview">
		{/* Content renders inside: mt-5 border border-theme-border-moderate rounded-md bg-white p-7 */}
	</TabsContent>
	<TabsContent value="configuration">{/* ... */}</TabsContent>
</Tabs>;
```

**Key details:**

- `TabsList` class: `flex shrink-0 flex-wrap justify-start border-b text-text-sm`
- `TabsTrigger` active: `data-[state=active]:text-theme-text-brand` + inner shadow primary-400
- `TabsContent` class: `mt-5 grow rounded-md border border-theme-border-moderate bg-white p-7`
- Tabs uses `@radix-ui/react-tabs`

### 5. Form (react-hook-form + zod)

Form uses react-hook-form's FormProvider. Each field follows FormField > FormItem > FormLabel + FormControl + FormMessage.

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage
} from "@zenml-io/react-component-library/components/client";
import { Input, Button } from "@zenml-io/react-component-library/components/server";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().optional()
});
type FormValues = z.infer<typeof schema>;

function CreateForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: { name: "", description: "" }
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Pipeline Name</FormLabel>
							<FormControl>
								<Input placeholder="my-pipeline" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" intent="primary" emphasis="bold">
					Create
				</Button>
			</form>
		</Form>
	);
}
```

**Key details:**

- `Form` = `FormProvider` from react-hook-form
- `FormField` wraps `Controller` — uses `render` prop with `({ field })` pattern
- `FormLabel` class: `text-text-sm font-medium text-theme-text-primary` (red on error)
- `FormMessage` class: `text-text-sm font-medium text-error-500`
- `FormItem` provides `space-y-2` spacing
- `FormControl` uses Radix `Slot` for automatic id/aria binding

### 6. Sheet

Sheet uses `@radix-ui/react-dialog` under the hood (not a separate Radix package). SheetContent takes a `side` prop.

```tsx
"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetClose
} from "@zenml-io/react-component-library/components/client";
import { Button } from "@zenml-io/react-component-library/components/server";

<Sheet open={open} onOpenChange={setOpen}>
	<SheetContent side="right">
		<SheetHeader>
			<SheetTitle>Pipeline Details</SheetTitle>
		</SheetHeader>
		<div className="flex-1 overflow-y-auto p-5">{/* Scrollable body */}</div>
		<SheetFooter>
			<SheetClose asChild>
				<Button intent="secondary" emphasis="subtle">
					Close
				</Button>
			</SheetClose>
			<Button intent="primary" emphasis="bold">
				Save
			</Button>
		</SheetFooter>
	</SheetContent>
</Sheet>;
```

**Key details:**

- `SheetContent` background: `bg-theme-surface-secondary`
- Side variants: `right`/`left` get `h-full w-3/4 max-w-sm lg:max-w-[1000px]`
- Overlay: `bg-black/10`
- `SheetHeader` class: `flex flex-col space-y-2 text-center sm:text-left`
- `SheetFooter` class: `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`

---

## Part B: Page-Level Templates

### 1. List View (Table Page)

```tsx
"use client";
import { Button, Badge } from "@zenml-io/react-component-library/components/server";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from "@zenml-io/react-component-library/components/client";
import { cn } from "@zenml-io/react-component-library";

function PipelineRunsList() {
	return (
		<div className="space-y-5">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-display-xs font-semibold text-theme-text-primary text-balance">
						Pipeline Runs
					</h1>
					<p className="text-text-sm text-theme-text-secondary text-pretty">
						View and manage all pipeline executions
					</p>
				</div>
				<Button intent="primary" emphasis="bold" size="md">
					New Run
				</Button>
			</div>

			{/* Filter bar */}
			<div className="flex items-center gap-2">
				<Select defaultValue="all">
					<SelectTrigger className="w-[140px] border border-theme-border-moderate rounded-md">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Status</SelectItem>
						<SelectItem value="completed">Completed</SelectItem>
						<SelectItem value="running">Running</SelectItem>
						<SelectItem value="failed">Failed</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Data table */}
			<div className="rounded-md border border-theme-border-moderate">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Pipeline</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Stack</TableHead>
							<TableHead className="text-right">Duration</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">training-pipeline</TableCell>
							<TableCell>
								<Badge color="green" size="sm">
									Completed
								</Badge>
							</TableCell>
							<TableCell className="text-theme-text-secondary">default</TableCell>
							<TableCell className="text-right tabular-nums">2m 34s</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
```

### 2. Detail Page

```tsx
"use client";
import { Badge, Tag, Button } from "@zenml-io/react-component-library/components/server";
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent
} from "@zenml-io/react-component-library/components/client";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage
} from "@zenml-io/react-component-library/components/server";

function PipelineDetail() {
	return (
		<div className="space-y-5">
			{/* Breadcrumbs */}
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/pipelines">Pipelines</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>training-pipeline</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			{/* Header with metadata */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h1 className="text-display-xs font-semibold text-theme-text-primary text-balance">
						training-pipeline
					</h1>
					<Badge color="green" size="sm">
						Active
					</Badge>
					<Tag color="purple" emphasis="subtle" size="xs">
						v2.1.0
					</Tag>
				</div>
				<div className="flex items-center gap-1">
					<Button intent="secondary" emphasis="subtle" size="md">
						Edit
					</Button>
					<Button intent="primary" emphasis="bold" size="md">
						Run
					</Button>
				</div>
			</div>

			{/* Tabbed content */}
			<Tabs defaultValue="overview">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="runs">Runs</TabsTrigger>
					<TabsTrigger value="configuration">Configuration</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					<div className="space-y-5">{/* Tab body content */}</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
```

### 3. Settings Page

```tsx
"use client";
import { Button, Input, Box } from "@zenml-io/react-component-library/components/server";
import {
	Switch,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from "@zenml-io/react-component-library/components/client";

function SettingsPage() {
	return (
		<div className="max-w-2xl space-y-5">
			<h1 className="text-display-xs font-semibold text-theme-text-primary text-balance">
				Settings
			</h1>

			{/* Section */}
			<Box className="p-5 space-y-5">
				<div>
					<h2 className="text-text-lg font-semibold text-theme-text-primary">General</h2>
					<p className="text-text-sm text-theme-text-secondary">
						Configure your workspace settings
					</p>
				</div>

				{/* Setting row: label left, control right */}
				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-sm font-medium text-theme-text-primary">Workspace Name</p>
						<p className="text-text-xs text-theme-text-secondary">
							The display name for your workspace
						</p>
					</div>
					<Input placeholder="My Workspace" inputSize="sm" className="w-[240px]" />
				</div>

				<div className="border-t border-theme-border-minimal" />

				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-sm font-medium text-theme-text-primary">Default Stack</p>
						<p className="text-text-xs text-theme-text-secondary">
							Stack used when none is specified
						</p>
					</div>
					<Select defaultValue="default">
						<SelectTrigger className="w-[200px] border border-theme-border-moderate rounded-md">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="default">Default</SelectItem>
							<SelectItem value="production">Production</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="border-t border-theme-border-minimal" />

				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-sm font-medium text-theme-text-primary">
							Auto-retry Failed Steps
						</p>
						<p className="text-text-xs text-theme-text-secondary">
							Automatically retry steps on transient failures
						</p>
					</div>
					<Switch />
				</div>

				{/* Actions */}
				<div className="flex justify-end gap-1 pt-3 border-t border-theme-border-minimal">
					<Button intent="secondary" emphasis="subtle">
						Cancel
					</Button>
					<Button intent="primary" emphasis="bold">
						Save Changes
					</Button>
				</div>
			</Box>
		</div>
	);
}
```

### 4. Dialog + Form

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from "@zenml-io/react-component-library/components/client";
import { Button, Input } from "@zenml-io/react-component-library/components/server";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	stack: z.string().min(1, "Select a stack")
});

function CreatePipelineDialog({
	open,
	onOpenChange
}: {
	open: boolean;
	onOpenChange: (v: boolean) => void;
}) {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: { name: "", stack: "" }
	});

	const onSubmit = (values: z.infer<typeof schema>) => {
		// handle submit
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Pipeline</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="px-5 py-3 space-y-3">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Pipeline Name</FormLabel>
										<FormControl>
											<Input placeholder="my-pipeline" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="stack"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Stack</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger className="w-full border border-theme-border-moderate rounded-md">
													<SelectValue placeholder="Select a stack" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="default" description="Local orchestrator">
													Default
												</SelectItem>
												<SelectItem value="production" description="Kubernetes orchestrator">
													Production
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter>
							<Button
								type="button"
								intent="secondary"
								emphasis="subtle"
								onClick={() => onOpenChange(false)}
							>
								Cancel
							</Button>
							<Button type="submit" intent="primary" emphasis="bold">
								Create
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
```

### 5. Empty State

```tsx
import { Button } from "@zenml-io/react-component-library/components/server";

function EmptyState() {
	return (
		<div className="flex flex-col items-center justify-center py-12 px-5">
			<svg
				className="size-12 text-theme-text-tertiary mb-3"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M12 2v20m10-10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			</svg>
			<h3 className="text-text-lg font-semibold text-theme-text-primary text-balance text-center">
				No pipelines yet
			</h3>
			<p className="text-text-sm text-theme-text-secondary text-pretty text-center mt-1 max-w-sm">
				Create your first pipeline to start orchestrating your ML workflows.
			</p>
			<Button intent="primary" emphasis="bold" size="md" className="mt-5">
				Create Pipeline
			</Button>
		</div>
	);
}
```

**Empty state rules:**

- Center vertically and horizontally
- Icon: `size-12`, `text-theme-text-tertiary`
- Title: `text-text-lg font-semibold text-balance`
- Description: `text-text-sm text-theme-text-secondary text-pretty max-w-sm`
- One clear primary action button
- Use Untitled UI icons (stroke-based, `currentColor`)
