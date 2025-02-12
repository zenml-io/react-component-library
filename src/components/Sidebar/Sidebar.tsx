import React, {
	HTMLAttributes,
	HTMLProps,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	cloneElement,
	forwardRef,
	isValidElement
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utilities/index";
import { useSidebarContext } from "./SidebarContext";

export const Sidebar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
	({ className, children, ...rest }, ref) => {
		const { isOpen, isClosing } = useSidebarContext();

		return (
			<nav
				ref={ref}
				className={cn(
					`group flex-1 h-full flex w-9 ${isOpen ? "w-[220px]" : isClosing ? "" : "hover:w-[220px]"}  bg-neutral-100 transition-all overflow-x-hidden duration-300 flex-col items-center border-r border-theme-border-moderate`,
					className
				)}
				{...rest}
			>
				<div className="flex flex-col h-full flex-1 w-full">{children}</div>
			</nav>
		);
	}
);

Sidebar.displayName = "Sidebar";

export function SidebarHeaderImage({ children }: PropsWithChildren) {
	return <Slot className="w-6 h-6 rounded-sm shrink-0">{children}</Slot>;
}

export const SidebarHeaderTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...rest }, ref) => {
	const { isOpen } = useSidebarContext();

	return (
		<p
			ref={ref}
			{...rest}
			className={cn(
				`${!isOpen && "opacity-0 group-hover:opacity-100"} ml-1 truncate duration-300 transition-all`,
				className
			)}
		>
			{children}
		</p>
	);
});

SidebarHeaderTitle.displayName = "SidebarHeaderTitle";

export type SidebarHeaderProps = HTMLAttributes<HTMLDivElement> & {
	icon?: ReactNode;
};

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
	({ icon, children, className, ...rest }, ref) => {
		const { isOpen } = useSidebarContext();

		const existingIconClasses = isValidElement(icon) ? icon.props.className || "" : "";

		const iconClasses = cn(
			existingIconClasses,
			`${!isOpen && "opacity-0 group-hover:opacity-100"} ml-auto shrink-0 duration-300 transition-all`
		);

		return (
			<div
				ref={ref}
				{...rest}
				className={cn(
					"bg-theme-surface-primary flex items-center whitespace-nowrap p-3 border-b border-theme-border-moderate",
					className
				)}
			>
				{children}

				{icon && cloneElement(icon as ReactElement, { className: iconClasses })}
			</div>
		);
	}
);

SidebarHeader.displayName = "SidebarHeader";

export const SidebarBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...rest }, ref) => {
		return (
			<div ref={ref} className={cn(`flex-1 flex px-1 py-2 flex-col w-full`, className)} {...rest} />
		);
	}
);

SidebarBody.displayName = "SidebarBody";

export const SidebarList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
	({ className, ...rest }, ref) => {
		return (
			<ul
				ref={ref}
				className={cn("flex gap-0.5 w-full flex-col items-center", className)}
				{...rest}
			/>
		);
	}
);

SidebarList.displayName = "SidebarList";

export type SidebarItemProps = HTMLAttributes<HTMLLIElement> & {
	isActive?: boolean;
};

export function SidebarItem({
	isActive = false,
	...rest
}: PropsWithChildren<{ isActive?: boolean }>) {
	return (
		<Slot
			className={`flex p-2 items-center gap-2 rounded-md w-full ${
				isActive ? "bg-theme-surface-primary" : "hover:bg-neutral-200 active:bg-neutral-300"
			}`}
			{...rest}
		></Slot>
	);
}

type SidebarItemContentProps = {
	icon: ReactNode;
	label: string;
	isActive?: boolean;
	svgStroke?: boolean;
};

export function SidebarItemContent({
	icon,
	label,
	isActive,
	svgStroke = false
}: SidebarItemContentProps) {
	const { isOpen } = useSidebarContext();
	const existingIconClasses = isValidElement(icon) ? icon.props.className || "" : "";

	const iconClasses = cn(
		existingIconClasses,
		`w-5 h-5 shrink-0 ${
			svgStroke
				? isActive
					? "stroke-primary-400"
					: "stroke-theme-text-tertiary"
				: isActive
					? "fill-primary-400"
					: "fill-theme-text-tertiary"
		}	`
	);
	return (
		<>
			{cloneElement(icon as ReactElement, { className: iconClasses })}
			<div
				className={`${!isOpen && "opacity-0 group-hover:opacity-100"} duration-300 transition-all`}
			>
				{label}
			</div>
		</>
	);
}
