import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utilities";

const inputVariants = cva(
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
				lg: "px-4 h-8 text-text-lg"
			}
		},
		defaultVariants: {
			inputSize: "md"
		}
	}
);

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	label?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, inputSize, label, id, iconLeft, iconRight, ...props }, ref) => {
		return (
			<div>
				{label && (
					<label htmlFor={id} className="text-text-sm mb-0.5 block text-theme-text-primary">
						{label}
					</label>
				)}
				<div className="relative">
					{iconLeft && (
						<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
							{iconLeft}
						</span>
					)}
					<input
						id={id}
						type={type}
						className={cn(inputVariants({ inputSize }), iconLeft ? "pl-8" : "", className)}
						ref={ref}
						{...props}
					/>
					{iconRight && (
						<span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
							{iconRight}
						</span>
					)}
				</div>
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
