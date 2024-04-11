import React, { HTMLAttributes } from "react";
import { cn } from "../../utilities";
import { cva, VariantProps } from "class-variance-authority";

export const progressTickCircleVariants = cva(
	"shrink-0 flex items-center justify-center rounded-rounded border-success-300 bg-success-50",
	{
		variants: {
			size: {
				sm: "h-[28px] w-[28px] border-2",
				md: "h-7 w-7 border-4"
			}
		},
		defaultVariants: {
			size: "sm"
		}
	}
);

export const progressTickVariants = cva("fill-success-300", {
	variants: {
		size: {
			sm: "h-3 w-3",
			md: "h-[28px] w-[28px]"
		}
	},
	defaultVariants: {
		size: "sm"
	}
});

export function ProgressTick({
	className,
	children,
	size,
	...rest
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof progressTickCircleVariants>) {
	return (
		<div {...rest} className={cn(progressTickCircleVariants({ size }), className)}>
			{children}
		</div>
	);
}

export const progressOutstandingVariants = cva(
	"rounded-rounded border-dashed border-neutral-300 bg-theme-surface-tertiary",
	{
		variants: {
			size: {
				sm: "h-[28px] w-[28px] border-2",
				md: "h-7 w-7 border-4"
			}
		},
		defaultVariants: {
			size: "sm"
		}
	}
);

export function ProgressOutstanding({
	className,
	size,
	...rest
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof progressOutstandingVariants>) {
	return <div {...rest} className={cn(progressOutstandingVariants({ size }), className)}></div>;
}
