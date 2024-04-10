import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utilities";

const CheckboxRoot = CheckboxPrimitive.Root;

const CheckboxIndicator = CheckboxPrimitive.Indicator;

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			[
				"flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold bg-theme-surface-primary",
				"hover:ring-4 hover:ring-theme-surface-tertiary",
				"focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary",
				"data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200",
				"active:bg-theme-surface-tertiary",
				"disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300"
			],
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
			<svg
				className="w-2 h-2 fill-white"
				viewBox="0 0 12 10"
				fill="black"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.28267 6.34605L2.09696 4.09419L0.666677 5.55738L4.28267 9.28281L11.3333 2.01874L9.91314 0.555542L4.28267 6.34605Z"
				/>
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, CheckboxRoot, CheckboxIndicator };
