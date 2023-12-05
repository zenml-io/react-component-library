import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "../../utilities/index";
import React from "react";

const badge = cva(
	"inline-flex h-5 items-center rounded-rounded px-2 py-0.5 text-text-xs font-semibold",
	{
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
			}
		},
		defaultVariants: {
			variant: "default",
			capitalized: false
		}
	}
);

export type BadgeProps = VariantProps<typeof badge>;
interface BadgeVariants extends HTMLAttributes<HTMLDivElement>, BadgeProps {}

export const Badge = ({ children, className, variant, capitalized, ...rest }: BadgeVariants) => {
	return (
		<div {...rest} className={cn(badge({ variant, capitalized }), className)}>
			{children}
		</div>
	);
};
