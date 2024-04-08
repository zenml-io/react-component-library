import React, { HTMLAttributes } from "react";
import { cn } from "../../utilities";

type Props = HTMLAttributes<HTMLDivElement>;

export function Spinner({ className, ...rest }: Props) {
	return (
		<div
			{...rest}
			role="alert"
			aria-busy="true"
			className={`${cn(
				"h-[180px] w-[180px] animate-spin-slow rounded-rounded border-[7px] border-theme-border-moderate border-b-theme-surface-strong",
				className
			)}`}
		></div>
	);
}
