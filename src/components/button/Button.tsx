import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../utilities/index";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...rest }: ButtonProps) {
	return (
		<button
			className={cn("bg-primary-500 rounded-md py-1 px-3 text-theme-text-negative", className)}
			{...rest}
		/>
	);
}
