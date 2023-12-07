"use client";

import * as RCheckbox from "@radix-ui/react-checkbox";
import CheckboxTick from "@/assets/icons/checkbox-tick.svg";
import { cn } from "@/lib/classnames";
import clsx from "clsx";

export default function Checkbox({ className, ...rest }: RCheckbox.CheckboxProps) {
	return (
		<RCheckbox.Root
			className={cn(
				clsx([
					"flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold bg-theme-surface-primary",
					"hover:ring-4 hover:ring-theme-surface-tertiary",
					"focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary",
					"data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200",
					"active:bg-theme-surface-tertiary",
					"disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300"
				]),
				className
			)}
			{...rest}
		>
			<RCheckbox.Indicator>
				<CheckboxTick className="h-2 w-2 fill-white" />
			</RCheckbox.Indicator>
		</RCheckbox.Root>
	);
}
