import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "../../utilities/index";
import React from "react";

const avatar = cva("inline-flex items-center justify-center font-semibold", {
	defaultVariants: {
		size: "md",
		type: "textSquare"
	},
	variants: {
		size: {
			xs: "w-5 h-5 text-xs",
			sm: "w-6 h-6 text-sm",
			md: "w-8 h-8 text-base",
			lg: "w-10 h-10 text-lg",
			xl: "w-16 h-16 text-3xl",
			xxl: "w-24 h-24 text-4xl"
		},
		type: {
			textSquare: "rounded-lg bg-purple-300 text-theme-text-brand",
			textCircle: "rounded-full bg-purple-300 p-4",
			user: "rounded-full p-0 overflow-auto",
			userSquare: "rounded-lg overflow-auto",
			ellipsis: "rounded-full bg-slate-200 text-neutral-200 text-slate-500 p-4"
		}
	}
});

export type AvatarProps = VariantProps<typeof avatar>;
interface AvatarVariants extends HTMLAttributes<HTMLDivElement>, AvatarProps {}

export const Avatar: React.FC<AvatarVariants> = ({
	children,
	className,
	size,
	type,
	...rest
}: AvatarVariants) => {
	return (
		<div className="w-full justify-center flex">
			<div {...rest} className={cn(avatar({ size, type }), className)}>
				{children}
			</div>
		</div>
	);
};

export default Avatar;
