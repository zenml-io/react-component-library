import React, { AnchorHTMLAttributes, cloneElement, forwardRef, isValidElement } from "react";

type SidebarProps = {
	children?: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
	return (
		<nav className="group flex-1 h-full flex w-9 hover:w-[220px] bg-neutral-100 transition-all overflow-x-hidden duration-300 flex-col items-center border-r border-theme-border-moderate">
			<div className="flex flex-col h-full w-full">{children}</div>
		</nav>
	);
}

type SidebarHeaderProps = {
	title: string;
};

export function SidebarHeader({ title }: SidebarHeaderProps) {
	return (
		<div className="bg-theme-surface-primary flex items-center whitespace-nowrap gap-1 p-3 border-b border-theme-border-moderate">
			<img
				src={`https://avatar.vercel.sh/${title}?size=32`}
				className="w-6 h-6 bg-primary-400 rounded-sm shrink-0"
			/>
			<p className="opacity-0 group-hover:opacity-100 duration-300 transition-all">{title}</p>
		</div>
	);
}

export function SidebarMain({ children }: { children?: React.ReactNode }) {
	return <ul className="px-1 py-2 flex gap-0.5 w-full flex-col items-center">{children}</ul>;
}

type SidebarItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
	icon: React.ReactNode;
	label: string;
	isActive?: boolean;
};

export const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(
	({ icon, isActive, label, ...rest }, ref) => {
		const existingIconClasses = isValidElement(icon) ? icon.props.className || "" : "";

		const iconClasses = `${existingIconClasses} w-5 h-5 shrink-0 ${
			isActive ? "stroke-primary-400" : "stroke-theme-text-tertiary"
		}`;

		return (
			<a
				ref={ref}
				className={`flex p-2 items-center w-full gap-2 rounded-md w-full block ${
					isActive ? "bg-theme-surface-primary" : "hover:bg-neutral-200 active:bg-neutral-300"
				}`}
				{...rest}
			>
				{cloneElement(icon as React.ReactElement, { className: iconClasses })}
				<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">{label}</div>
			</a>
		);
	}
);

SidebarItem.displayName = "SidebarItem";
