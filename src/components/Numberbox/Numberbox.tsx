import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";

export const numberboxVariants = cva(
	"flex h-10 w-10 items-center justify-center rounded-sm text-text-lg font-semibold",
	{
		variants: {
			intent: {
				default: "bg-primary-100 text-theme-text-brand",
				disabled: "bg-neutral-100 text-theme-text-tertiary"
			}
		},
		defaultVariants: {
			intent: "default"
		}
	}
);

export interface NumberboxProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof numberboxVariants> {}

const Numberbox = React.forwardRef<HTMLDivElement, NumberboxProps>(
	({ className, intent, children, ...props }, ref) => (
		<div ref={ref} className={cn(numberboxVariants({ intent }), className)} {...props}>
			{children}
		</div>
	)
);
Numberbox.displayName = "Numberbox";

export { Numberbox };