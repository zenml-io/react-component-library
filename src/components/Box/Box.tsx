import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { cn } from "../../utilities";

export const boxVariants = cva("border rounded-md", {
	variants: {
		variant: {
			default: "border-theme-border-moderate bg-theme-surface-primary"
		}
	},
	defaultVariants: {
		variant: "default"
	}
});

export interface BoxProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof boxVariants> {}

export function Box({ children, className, variant, ...rest }: BoxProps) {
	return (
		<div {...rest} className={cn(boxVariants({ variant }), className)}>
			{children}
		</div>
	);
}
