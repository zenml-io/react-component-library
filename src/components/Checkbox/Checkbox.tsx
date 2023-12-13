import * as RCheckbox from "@radix-ui/react-checkbox";
import { cn } from "../../utilities/index";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const checkbox = cva(
	"flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold bg-theme-surface-primary " +
		"hover:ring-4 hover:ring-theme-surface-tertiary " +
		"focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary " +
		"data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200 " +
		"active:bg-theme-surface-tertiary " +
		"disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300"
);

export type CheckboxProps = VariantProps<typeof checkbox>;

export const Checkbox: React.FC<RCheckbox.CheckboxProps> = ({
	className,
	...rest
}: RCheckbox.CheckboxProps) => {
	return (
		<div className="flex justify-center w-full">
			<RCheckbox.Root className={cn(checkbox(), className)} {...rest}>
				<RCheckbox.Indicator>
					<div className="i-check-tick h-5 w-5"></div>
				</RCheckbox.Indicator>
			</RCheckbox.Root>
		</div>
	);
};
