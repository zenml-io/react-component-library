"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";

export const avatarVariants = cva("relative flex shrink-0 overflow-hidden", {
	variants: {
		type: { square: "rounded-md", rounded: "rounded-rounded" },
		size: {
			xs: "w-3 h-3",
			sm: "w-5 h-5",
			md: "w-6 h-6",
			lg: "w-7 h-7",
			xl: "w-9 h-9",
			xxl: "w-12 h-12"
		}
	},
	defaultVariants: {
		type: "rounded",
		size: "lg"
	}
});

const fallbackVariants = cva(
	"flex aspect-square items-center justify-center bg-primary-50 text-theme-text-brand font-semibold uppercase",
	{
		variants: {
			size: {
				xs: "text-text-xs",
				sm: "text-text-xs",
				md: "text-text-md",
				lg: "text-text-lg",
				xl: "text-display-sm",
				xxl: "text-display-md"
			}
		}
	}
);

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, size, type, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(avatarVariants({ size, type }), className)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn("aspect-square h-full w-full", className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
		VariantProps<typeof fallbackVariants>
>(({ className, size, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(fallbackVariants({ size }), className)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
