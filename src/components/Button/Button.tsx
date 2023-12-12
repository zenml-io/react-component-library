import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utilities/index";

const buttonVariants = cva(
	"transition-all rounded-md duration-200 flex  items-center font-semibold disabled:pointer-events-none",
	{
		variants: {
			emphasis: {
				bold: "",
				subtle: "",
				minimal: ""
			},
			intent: {
				primary: "",
				secondary: "",
				danger: ""
			},
			size: {
				sm: "px-2 h-6 text-text-sm text-sm",
				md: "px-4 py-4 text-base h-7 text-text-md",
				lg: "px-6 py-6 text-lg	h-8 text-text-lg"
			}
		},
		compoundVariants: [
			// Primary
			{
				emphasis: "bold",
				intent: "primary",
				class:
					"bg-primary-500 text-white hover:bg-primary-400 active:ring-[#E4D8FD] active:bg-primary-500 focus-visible:outline-none active:ring-4 disabled:bg-primary-50"
			},
			{
				emphasis: "subtle",
				intent: "primary",
				class:
					"border border-primary-400 text-primary-600 hover:bg-primary-50 active:bg-primary-100 active:ring-[#E4D8FD] active:ring-4 disabled:border-primary-100 disabled:text-primary-100"
			},
			{
				emphasis: "minimal",
				intent: "primary",
				class:
					"text-primary-600 hover:bg-primary-50 active:bg-primary-100 active:ring-[#E4D8FD] active:ring-4 disabled:text-primary-100"
			},
			// Secondary
			{
				emphasis: "bold",
				intent: "secondary",
				class:
					"bg-neutral-200 text-theme-text-primary hover:bg-neutral-300 focus-visible:outline-none active:bg-neutral-400 active:ring-4 active:ring-[#E5E7EB] disabled:text-neutral-300"
			},
			{
				emphasis: "subtle",
				intent: "secondary",
				class:
					"border border-neutral-300 text-neutral-900 hover:bg-neutral-100 active:border-neutral-400 active:bg-neutral-300 active:ring-4 active:ring-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300"
			},
			{
				emphasis: "minimal",
				intent: "secondary",
				class:
					"text-primary-900 hover:bg-neutral-200 active:bg-neutral-300 active:ring-4 active:ring-neutral-100 disabled:text-neutral-300"
			},
			// Danger
			{
				emphasis: "bold",
				intent: "danger",
				class:
					"bg-error-600 text-white hover:bg-error-500 active:ring-error-50 active:bg-error-600 focus-visible:outline-none active:ring-4 disabled:bg-error-100"
			},
			{
				emphasis: "subtle",
				intent: "danger",
				class:
					"border border-error-600 text-error-700 hover:bg-error-50 active:bg-error-100 active:ring-4 active:ring-error-50 disabled:border-error-100 disabled:text-error-100"
			},
			{
				emphasis: "minimal",
				intent: "danger",
				class:
					"text-error-700 hover:bg-error-50 active:bg-error-100 active:ring-4 active:ring-error-50 disabled:text-error-100"
			}
		],
		defaultVariants: {
			size: "sm",
			emphasis: "bold",
			intent: "primary"
		}
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ intent, size, className, asChild, emphasis, ...rest }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				ref={ref}
				className={cn(buttonVariants({ intent, size, emphasis }), className)}
				{...rest}
			/>
		);
	}
);

Button.displayName = "Button";

export { Button };
