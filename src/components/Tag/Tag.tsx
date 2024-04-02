import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utilities";

export const tagVariants = cva("shrink-0 flex items-center justify-center gap-0.5 py-0.5 px-1", {
	variants: {
		rounded: { false: "rounded-md", true: "rounded-rounded" },
		size: { sm: "h-6  text-text-sm", xs: "h-5 text-text-xs" },
		emphasis: {
			bold: "",
			subtle: "border",
			minimal: "border"
		},
		color: {
			grey: "",
			purple: "",
			green: "",
			yellow: "",
			red: "",
			blue: "",
			teal: "",
			lime: "",
			magenta: "",
			turquoise: "",
			orange: ""
		}
	},
	compoundVariants: [
		// gray
		{
			emphasis: "bold",
			color: "grey",
			class: "bg-neutral-600 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "grey",
			class: "border-theme-border-moderate text-theme-text-secondary"
		},
		{
			emphasis: "minimal",
			color: "grey",
			class: "border-theme-border-moderate text-theme-text-secondary"
		},
		// purple
		{
			emphasis: "bold",
			color: "purple",
			class: "bg-primary-400 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "purple",
			class: "border-primary-100 text-theme-text-brand bg-primary-25 "
		},
		{
			emphasis: "minimal",
			color: "purple",
			class: "border-theme-border-moderate text-theme-text-brand"
		},
		// red
		{
			emphasis: "bold",
			color: "red",
			class: "bg-error-600 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "red",
			class: "bg-error-50 border-error-200 text-error-800"
		},
		{
			emphasis: "minimal",
			color: "red",
			class: "border-theme-border-moderate text-error-800"
		},
		// green
		{
			emphasis: "bold",
			color: "green",
			class: "bg-success-600 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "green",
			class: "bg-success-50 border-success-200 text-success-800"
		},
		{
			emphasis: "minimal",
			color: "green",
			class: "border-theme-border-moderate text-success-800"
		},
		// yellow
		{
			emphasis: "bold",
			color: "yellow",
			class: "bg-warning-400 text-warning-900"
		},
		{
			emphasis: "subtle",
			color: "yellow",
			class: "bg-warning-50 border-warning-200 text-warning-900"
		},
		{
			emphasis: "minimal",
			color: "yellow",
			class: "border-theme-border-moderate text-warning-900"
		},
		// blue
		{
			emphasis: "bold",
			color: "blue",
			class: "bg-blue-500 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "blue",
			class: "bg-blue-25 border-blue-100 text-blue-700"
		},
		{
			emphasis: "minimal",
			color: "blue",
			class: "border-theme-border-moderate text-blue-700"
		},
		// teal
		{
			emphasis: "bold",
			color: "teal",
			class: "bg-teal-600 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "teal",
			class: "bg-teal-25 border-teal-100 text-teal-600"
		},
		{
			emphasis: "minimal",
			color: "teal",
			class: "border-theme-border-moderate text-teal-600"
		},
		// lime
		{
			emphasis: "bold",
			color: "lime",
			class: "bg-lime-700 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "lime",
			class: "bg-lime-25 border-lime-100 text-lime-700"
		},
		{
			emphasis: "minimal",
			color: "lime",
			class: "border-theme-border-moderate text-lime-700"
		},
		// magenta
		{
			emphasis: "bold",
			color: "magenta",
			class: "bg-magenta-500 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "magenta",
			class: "bg-magenta-25 border-magenta-100 text-magenta-600"
		},
		{
			emphasis: "minimal",
			color: "magenta",
			class: "border-theme-border-moderate text-magenta-600"
		},
		// turquoise
		{
			emphasis: "bold",
			color: "turquoise",
			class: "bg-turquoise-500 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "turquoise",
			class: "bg-turquoise-25 border-turquoise-100 text-turquoise-600"
		},
		{
			emphasis: "minimal",
			color: "turquoise",
			class: "border-theme-border-moderate text-turquoise-600"
		},
		// orange
		{
			emphasis: "bold",
			color: "orange",
			class: "bg-orange-400 text-theme-text-negative"
		},
		{
			emphasis: "subtle",
			color: "orange",
			class: "bg-orange-25 border-orange-100 text-orange-700"
		},
		{
			emphasis: "minimal",
			color: "orange",
			class: "border-theme-border-moderate text-orange-600"
		}
	],
	defaultVariants: {
		rounded: true,
		size: "sm"
	}
});

export interface TagProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		VariantProps<typeof tagVariants> {}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
	({ className, rounded, emphasis, color, size, ...rest }, ref) => {
		return (
			<div
				{...rest}
				className={cn(tagVariants({ rounded, emphasis, color, size }), className)}
				ref={ref}
			></div>
		);
	}
);

Tag.displayName = "Tag";
