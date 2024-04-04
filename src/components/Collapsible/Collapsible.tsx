import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utilities";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const CollapsiblePanel = forwardRef<
	ElementRef<typeof Collapsible>,
	ComponentPropsWithoutRef<typeof Collapsible>
>(({ className, ...props }, forwardedRef) => (
	<Collapsible
		className={cn("overflow-hidden rounded-md border border-theme-border-moderate", className)}
		ref={forwardedRef}
		{...props}
	/>
));

CollapsiblePanel.displayName = "Collapsible Panel";

const headerVairants = cva("px-5 py-3", {
	variants: {
		intent: {
			primary: "bg-theme-surface-primary",
			secondary: "bg-theme-surface-secondary"
		}
	},
	defaultVariants: {
		intent: "primary"
	}
});

export interface CollapsibleHeaderProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof headerVairants> {}

const CollapsibleHeader = forwardRef<HTMLDivElement, CollapsibleHeaderProps>(
	({ className, children, intent, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(headerVairants({ intent }), className)} {...props}>
				{children}
			</div>
		);
	}
);

CollapsibleHeader.displayName = "Collapsible Header";

export { Collapsible, CollapsibleContent, CollapsibleHeader, CollapsiblePanel, CollapsibleTrigger };
