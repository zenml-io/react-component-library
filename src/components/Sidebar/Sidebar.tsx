import React, {
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	cloneElement,
	isValidElement
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "../../utilities/index";

export function Sidebar({ className, children, ...rest }: HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"group flex-1 h-full flex w-9 hover:w-[220px] bg-neutral-100 transition-all overflow-x-hidden duration-300 flex-col items-center border-r border-theme-border-moderate",
				className
			)}
			{...rest}
		>
			<div className="flex flex-col h-full flex-1 w-full">{children}</div>
		</nav>
	);
}

type SidebarHeaderProps = {
	title: string;
	icon?: React.ReactNode;
};

export function SidebarHeaderImage({ children }: PropsWithChildren) {
	return <Slot className="w-6 h-6 rounded-sm shrink-0">{children}</Slot>;
}

export function SidebarHeader({ title, icon, children }: PropsWithChildren<SidebarHeaderProps>) {
	const existingIconClasses = isValidElement(icon) ? icon.props.className || "" : "";

	const iconClasses = cn(
		existingIconClasses,
		"w-6 ml-auto shrink-0 h-6 opacity-0 group-hover:opacity-100  duration-300 transition-all"
	);

	return (
		<div className="bg-theme-surface-primary flex items-center whitespace-nowrap p-3 border-b border-theme-border-moderate">
			{children}
			<p className="opacity-0 group-hover:opacity-100 ml-1 truncate duration-300 transition-all">
				{title}
			</p>
			{icon && cloneElement(icon as React.ReactElement, { className: iconClasses })}
		</div>
	);
}

export function SidebarBody({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn(`flex-1 flex flex-col w-full`, className)} {...rest} />;
}

export function SidebarList({ className, ...rest }: HTMLAttributes<HTMLUListElement>) {
	return (
		<ul
			className={cn("px-1 py-2 flex gap-0.5 w-full flex-col items-center", className)}
			{...rest}
		/>
	);
}

export function SidebarItem({
	isActive = false,
	...rest
}: {
	children: ReactNode;
	isActive?: boolean;
}) {
	return (
		<li className="w-full">
			<Slot
				className={`flex p-2 items-center gap-2 rounded-md w-full ${
					isActive ? "bg-theme-surface-primary" : "hover:bg-neutral-200 active:bg-neutral-300"
				}`}
				{...rest}
			></Slot>
		</li>
	);
}

type SidebarItemContentProps = {
	icon: React.ReactNode;
	label: string;
	isActive?: boolean;
};

export function SidebarItemContent({ icon, label, isActive }: SidebarItemContentProps) {
	const existingIconClasses = isValidElement(icon) ? icon.props.className || "" : "";

	const iconClasses = cn(
		existingIconClasses,
		`w-5 h-5 shrink-0 ${isActive ? "stroke-primary-400" : "stroke-theme-text-tertiary"}	`
	);
	return (
		<>
			{cloneElement(icon as React.ReactElement, { className: iconClasses })}
			<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">{label}</div>
		</>
	);
}
