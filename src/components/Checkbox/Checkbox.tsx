"use client";

import * as RCheckbox from "@radix-ui/react-checkbox";
import { cn } from "../../utilities/index";
import { cva, VariantProps } from "class-variance-authority";
import React, { Children, HTMLAttributes } from "react";

const checkbox = cva(
	"flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-theme-border-bold bg-theme-surface-primary " +
		"hover:ring-4 hover:ring-theme-surface-tertiary " +
		"focus:outline-none focus:ring-4 focus:ring-theme-surface-tertiary " +
		"data-[state=checked]:border-theme-surface-strong data-[state=checked]:bg-theme-surface-strong data-[state=checked]:active:border-primary-200 data-[state=checked]:active:bg-primary-200 " +
		"active:bg-theme-surface-tertiary " +
		"disabled:pointer-events-none disabled:border-neutral-300 disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:bg-neutral-300",
	{
		defaultVariants: {
			variant: "mixed"
		},
		variants: {
			variant: {
				mixed: "--surface-surface-terciary",
				selected: ""
			}
		}
	}
);

export type CheckboxProps = VariantProps<typeof checkbox>;

export const Checkbox: React.FC<RCheckbox.CheckboxProps> = ({
	className,
	checked,
	defaultChecked,
	...rest
}: RCheckbox.CheckboxProps) => {
	return (
		<div className="flex justify-center w-full">
			<RCheckbox.Root className={cn(checkbox())} {...rest}>
				<RCheckbox.Indicator>
					{checked ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					)}
				</RCheckbox.Indicator>
			</RCheckbox.Root>
		</div>
	);
};
