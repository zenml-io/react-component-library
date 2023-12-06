import React, {
	HTMLAttributes,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	cloneElement,
	forwardRef
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../..";

export const Breadcrumb = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & {
		items: ReactNode[];
		startIcon?: ReactNode;
		trunacteIcon?: ReactNode;
	}
>(({ className, items, startIcon, trunacteIcon, ...rest }, ref) => {
	let displayItems: ReactNode[] = [];

	if (items.length > 5) {
		const firstTwoItems = items.slice(0, 2);
		const lastTwoItems = items.slice(-2);

		displayItems = [...firstTwoItems, <TruncateButton icon={trunacteIcon} />, ...lastTwoItems];
	} else {
		displayItems = items;
	}

	return (
		<nav
			ref={ref}
			{...rest}
			className={cn("flex items-center gap-1", className)}
			aria-label="Breadcrumb"
		>
			{startIcon && startIcon}
			<ol className="flex gap-0.5 items-center">
				{displayItems.map((item, i) => (
					<li className="flex gap-0.5 " key={i}>
						{i === displayItems.length - 1 ? (
							<span aria-current="location">
								{cloneElement(item as ReactElement, { isActive: true })}
							</span>
						) : (
							<>
								{item}
								<div aria-hidden="true" className="text-neutral-200 text-center w-4 h-4">
									{" "}
									/{" "}
								</div>
							</>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
});

Breadcrumb.displayName = "Breadcrumb";

export const Crumb = ({ isActive = false, ...rest }: PropsWithChildren<{ isActive?: boolean }>) => {
	return (
		<Slot
			className={`${
				isActive
					? "font-semibold text-theme-text-primary"
					: "text-theme-text-secondary hover:text-theme-text-brand hover:decoration-inherit"
			} underline decoration-transparent transition-all duration-200 max-w-[120px] truncate`}
			{...rest}
		/>
	);
};

Crumb.displayName = "Crumb";

type TruncateButtonProps = { icon?: ReactNode };
function TruncateButton({ icon }: TruncateButtonProps) {
	return (
		<div className="h-5 w-[36px] flex items-center justify-center border rounded-md border-theme-border-secondary">
			{icon ? icon : "..."}
		</div>
	);
}
