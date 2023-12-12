import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "../../utilities/index";
import React from "react";

const badge = cva("inline-flex h-5 items-center px-2 py-0.5 text-text-xs font-semibold", {
	defaultVariants: {
		variant: "gray",
		capitalized: false,
		rounded: true
	},
	variants: {
		capitalized: {
			true: "uppercase",
			false: ""
		},
		variant: {
			default: "bg-primary-50 text-theme-text-brand",
			success: "bg-success-100 text-success-800",
			warning: "bg-warning-50 text-warning-800",
			info: "bg-blue-50 text-blue-600",
			gray: "bg-neutral-100 text-theme-text-secondary",
			disabled: "bg-neutral-200 text-theme-text-secondary"
		},
		rounded: {
			true: "rounded-rounded",
			false: "rounded-md"
		}
	}
});

export type BadgeProps = VariantProps<typeof badge>;
interface BadgeVariants extends HTMLAttributes<HTMLDivElement>, BadgeProps {}

export const Badge: React.FC<BadgeVariants> = ({
	children,
	className,
	variant,
	capitalized,
	rounded,
	...rest
}: BadgeVariants) => {
	return (
		<div className="flex justify-center w-full">
			<div {...rest} className={cn(badge({ variant, capitalized, rounded }), className)}>
				{children}
			</div>
		</div>
	);
};
