import React, { ButtonHTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utilities/index";

const buttonVariants = cva("bg-primary-500 rounded-md py-1 px-3 text-theme-text-negative");

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export function Button({ className, ...rest }: ButtonProps) {
	return <button className={cn(buttonVariants(), className)} {...rest} />;
}
