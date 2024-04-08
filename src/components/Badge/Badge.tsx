import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { cn } from "../../utilities";

export const badgeVariants = cva("inline-flex items-center", {
	variants: {
		rounded: {
			true: "rounded-rounded",
			false: "rounded-sm"
		},
		size: {
			xs: "text-text-xs px-0.5",
			sm: "text-text-xs py-0.5 px-2 h-5",
			md: "text-text-sm py-0.5 px-2 h-6"
		},
		color: {
			green: "bg-success-100 text-success-800",
			yellow: "bg-warning-200 text-warning-900",
			"light-purple": "bg-primary-25 text-primary-500",
			purple: "bg-primary-50 text-primary-500",
			blue: "bg-blue-50 text-blue-600",
			"light-grey": "bg-neutral-100 text-theme-text-secondary",
			grey: "bg-neutral-200 text-theme-text-primary",
			red: "bg-error-100 text-error-700",
			orange: "bg-orange-100 text-orange-700",
			lime: "bg-lime-100 text-lime-800",
			teal: "bg-teal-100 text-teal-700",
			turquoise: "bg-turquoise-100 text-turquoise-700",
			magenta: "bg-magenta-100 text-magenta-700"
		}
	},
	defaultVariants: {
		color: "purple",
		rounded: true,
		size: "md"
	}
});

export interface BadgeProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		VariantProps<typeof badgeVariants> {}

export function Badge({ children, className, color, rounded, size, ...rest }: BadgeProps) {
	return (
		<div {...rest} className={cn(badgeVariants({ color, rounded, size }), className)}>
			{children}
		</div>
	);
}
