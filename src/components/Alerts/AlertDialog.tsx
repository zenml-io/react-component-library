import { cn } from "../../utilities/index";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import React from "react";

export const AlertDialog = forwardRef<
	ElementRef<typeof RAlertDialog.Content>,
	ComponentPropsWithoutRef<typeof RAlertDialog.Content>
>(({ className, ...props }, ref) => (
	<RAlertDialog.Content
		ref={ref}
		className={cn(
			"fixed left-[50%] top-[50%] z-20 max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md border border-theme-border-moderate bg-theme-surface-primary shadow-lg focus:outline-none",
			className
		)}
		{...props}
	/>
));

AlertDialog.displayName = RAlertDialog.Content.displayName;

export const AlertDialogTitle = forwardRef<
	ElementRef<typeof RAlertDialog.Title>,
	ComponentPropsWithoutRef<typeof RAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<RAlertDialog.Title ref={ref} className={cn("mb-0.5", className)} {...props} />
));

AlertDialogTitle.displayName = RAlertDialog.Title.displayName;

export const AlertDialogDescription = forwardRef<
	ElementRef<typeof RAlertDialog.Description>,
	ComponentPropsWithoutRef<typeof RAlertDialog.Description>
>(({ className, ...props }, ref) => (
	<RAlertDialog.Description
		ref={ref}
		className={cn("text-text-sm text-theme-text-secondary", className)}
		{...props}
	/>
));

AlertDialogDescription.displayName = RAlertDialog.Description.displayName;
