import { cva, VariantProps } from "class-variance-authority";
import React, { CSSProperties, HTMLAttributes } from "react";

import { cn } from "../../utilities";

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

type RadialProgressProps = {
	value: number;
	outerCirlcle?: number;
	innerCircle?: number;
};
export function RadialProgress({
	value,
	outerCirlcle = 40,
	innerCircle = 30,
	children,
	className,
	...rest
}: HTMLAttributes<HTMLDivElement> & RadialProgressProps) {
	return (
		<div
			{...rest}
			style={
				{
					"--value": `${value * 3.6}deg`,
					"--outer-circle": `${outerCirlcle}px`,
					"--inner-circle": `${innerCircle}px`
				} as CSSProperties
			}
			className={cn(
				"relative flex h-[var(--outer-circle)] w-[var(--outer-circle)] shrink-0 items-center justify-center rounded-rounded bg-[conic-gradient(hsl(var(--color-primary-400))_var(--value),hsl(var(--color-primary-050))_var(--value))] after:h-[var(--inner-circle)] after:w-[var(--inner-circle)] after:rounded-rounded after:bg-theme-surface-primary after:content-['']",
				className
			)}
			aria-label="Radial Progress Bar"
			role="progressbar"
		>
			{children}
		</div>
	);
}
