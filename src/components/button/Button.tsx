import React, { ButtonHTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utilities/index";

const buttonVariants = cva(
	"transition-all duration-200 flex gap-1 items-center font-semibold disabled:pointer-events-none",
	{
		variants: {
			intent: {
				primary:
					"bg-primary-500 text-white hover:bg-primary-400 active:ring-[#E4D8FD] active:bg-primary-500 active-visible:outline-none active:ring-4 disabled:bg-primary-50",
				secondary:
					"bg-neutral-200 text-theme-text-primary hover:bg-neutral-300 active-visible:outline-none active:bg-neutral-400 active:ring-4 active:ring-[#E5E7EB] disabled:text-neutral-100",
				transparent:
					"bg-transparent text-theme-text-secondary hover:bg-neutral-300 hover:text-theme-text-primary active:bg-neutral-400 active:outline-none active:ring-4 active:ring-[#E5E7EB] disabled:text-theme-text-tertiary",
				headless: "",
				danger:
					"bg-error-600 text-white hover:bg-error-500 active:ring-error-50 active:bg-error-600 active-visible:outline-none active:ring-4 disabled:bg-error-50"
			},
			size: {
				sm: "rounded-md py-1 px-2",
				lg: "rounded-md py-2 px-3",
				xl: "rounded-md py-3 px-5"
			}
		},
		defaultVariants: {
			intent: "primary",
			size: "sm"
		}
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export function Button({ intent, size, className, ...rest }: ButtonProps) {
	return <button className={cn(buttonVariants({ intent, size }), className)} {...rest} />;
}
