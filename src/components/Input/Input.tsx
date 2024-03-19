import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../utilities";

export const inputVariants = cva(
	cn([
		"transition-all duration-200 rounded-md bg-theme-surface-primary",
		"border-[#D0D5DD] border",
		"text-theme-text-primary",
		"placeholder:text-theme-text-secondary",
		"focus:border-neutral-500 focus:outline-none focus:shadow-sm",
		"disabled:bg-neutral-100 disabled:text-neutral-400"
	]),
	{
		variants: {
			inputSize: {
				sm: "px-2 h-6 text-text-sm",
				md: "px-2 h-7 text-text-md",
				lg: "px-3 h-8 text-text-lg"
			}
		},
		defaultVariants: {
			inputSize: "md"
		}
	}
);

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, inputSize, ...props }, ref) => {
		return (
			<div>
				<input
					type={type}
					className={cn(inputVariants({ inputSize }), className)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
