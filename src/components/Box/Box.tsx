import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { cn } from "../../utilities";

const boxVariants = cva("border rounded-md", {
	variants: {
		variant: {
			default: "border-theme-border-moderate bg-theme-surface-primary"
		}
	},
	defaultVariants: {
		variant: "default"
	}
});

type DefaultBoxProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>;

export function Box({ children, className, variant, ...rest }: DefaultBoxProps) {
	return (
		<div {...rest} className={cn(boxVariants({ variant }), className)}>
			{children}
		</div>
	);
}
