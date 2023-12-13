import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utilities/index";
import { cva, VariantProps } from "class-variance-authority";

const avatarVariants = cva("relative flex shrink-0 overflow-hidden", {
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
>(({ ...props }, ref) => (
	<AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full")} {...props} />
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

export type CompleteAvatarProps = {
	avatarUrl: string;
	fallbackValue: string;
};

export const CompleteAvatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	VariantProps<typeof avatarVariants> & CompleteAvatarProps
>(({ avatarUrl, fallbackValue, size, type }, ref) => (
	<Avatar ref={ref} size={size} type={type}>
		<AvatarImage src={avatarUrl} />
		<AvatarFallback size={size}>{fallbackValue}</AvatarFallback>
	</Avatar>
));
CompleteAvatar.displayName = AvatarPrimitive.Fallback.displayName;
