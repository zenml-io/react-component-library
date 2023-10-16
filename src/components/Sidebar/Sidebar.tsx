import React from "react";
import { Slot } from "@radix-ui/react-slot";
import CPU from "../../../.storybook/assets/CPU";

type SidebarProps = {
	children?: React.ReactNode;
};

const isActive = true;

export function Sidebar({ children }: SidebarProps) {
	return (
		<nav className="group flex-1 h-full flex w-9 hover:w-[220px] bg-neutral-100 transition-all overflow-x-hidden duration-300 flex-col items-center border-r border-theme-border-moderate">
			<div className="flex flex-col h-full w-full">
				<div className="bg-theme-surface-primary flex items-center gap-1 p-3 border-b border-theme-border-moderate">
					<img
						src="https://avatar.vercel.sh/Models?size=32"
						className="w-6 h-6 bg-primary-400 rounded-sm shrink-0"
					/>
					<p className="opacity-0 group-hover:opacity-100 duration-300 transition-all">
						Prod_Models
					</p>
				</div>
				<ul className="px-1 py-2 flex gap-0.5 w-full flex-col items-center">
					<li className="w-full">
						<a
							href="#"
							className={`flex p-2 items-center w-full gap-2 rounded-md w-full block ${
								isActive ? "bg-theme-surface-primary" : "hover:bg-neutral-200 active:bg-neutral-300"
							}`}
						>
							<CPU
								className={`w-5 h-5 shrink-0 ${
									isActive ? "stroke-primary-400" : "stroke-theme-text-tertiary"
								}`}
							/>
							<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">
								Models
							</div>
						</a>
					</li>
					<li className="w-full">
						<a
							href="#"
							className="flex p-2 items-center w-full gap-2 hover:bg-neutral-200 active:bg-neutral-300 rounded-md w-full block"
						>
							<CPU className="w-5 h-5 shrink-0 stroke-theme-text-tertiary" />
							<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">
								Models
							</div>
						</a>
					</li>
					<li className="w-full">
						<a
							href="#"
							className="flex p-2 items-center w-full gap-2 hover:bg-neutral-200 active:bg-neutral-300 rounded-md w-full block"
						>
							<CPU className="w-5 h-5 shrink-0 stroke-theme-text-tertiary" />
							<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">
								Models
							</div>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

// type SidebarItemProps = {
// 	icon: React.ReactNode;
// 	label: string;
// };

// export function SidebarItem({ label, icon }: SidebarItemProps) {
// 	return (
// 		<div className="flex p-2 items-center w-full gap-2 hover:bg-neutral-200 active:bg-neutral-300 rounded-md w-full block">
// 			{icon}
// 			<div className="opacity-0 group-hover:opacity-100 duration-300 transition-all">{label}</div>
// 		</div>
// 	);
// }
