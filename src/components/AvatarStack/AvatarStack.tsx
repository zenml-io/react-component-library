import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

// ============================================================================
// AvatarStackRoot - Container with negative spacing
// ============================================================================

const avatarStackRootVariants = cva("flex items-center", {
	variants: {
		spacing: {
			sm: "-space-x-[6px]",
			md: "-space-x-[10px]",
			lg: "-space-x-[14px]"
		}
	},
	defaultVariants: {
		spacing: "md"
	}
});

export interface AvatarStackRootProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarStackRootVariants> {}

const AvatarStackRoot = React.forwardRef<HTMLDivElement, AvatarStackRootProps>(
	({ className, spacing, ...props }, ref) => (
		<div ref={ref} className={cn(avatarStackRootVariants({ spacing }), className)} {...props} />
	)
);
AvatarStackRoot.displayName = "AvatarStackRoot";

// ============================================================================
// AvatarStackItem - Wrapper for individual Avatar with border
// ============================================================================

const avatarStackItemVariants = cva("border-theme-surface-primary bg-theme-surface-primary", {
	variants: {
		borderWidth: {
			2: "border-2",
			4: "border-4",
			6: "border-6"
		}
	},
	defaultVariants: {
		borderWidth: 4
	}
});

export interface AvatarStackItemProps
	extends React.ComponentPropsWithoutRef<typeof Avatar>,
		VariantProps<typeof avatarStackItemVariants> {}

const AvatarStackItem = React.forwardRef<
	React.ElementRef<typeof Avatar>,
	AvatarStackItemProps
>(({ className, borderWidth, ...props }, ref) => (
	<Avatar
		ref={ref}
		className={cn(avatarStackItemVariants({ borderWidth }), className)}
		{...props}
	/>
));
AvatarStackItem.displayName = "AvatarStackItem";

// ============================================================================
// AvatarStackOverflow - +N indicator with optional Popover
// ============================================================================

export interface AvatarStackOverflowItem {
	name: string;
	src?: string;
}

export interface AvatarStackOverflowProps
	extends Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "children"> {
	count: number;
	items?: AvatarStackOverflowItem[];
	withPopover?: boolean;
	borderWidth?: 2 | 4 | 6;
	maxItemsInPopover?: number;
}

const AvatarStackOverflow = React.forwardRef<
	React.ElementRef<typeof Avatar>,
	AvatarStackOverflowProps
>(
	(
		{
			className,
			count,
			items = [],
			withPopover = false,
			borderWidth = 4,
			maxItemsInPopover = 10,
			size = "lg",
			...props
		},
		ref
	) => {
		const avatarContent = (
			<Avatar
				ref={ref}
				size={size}
				className={cn(avatarStackItemVariants({ borderWidth }), className)}
				type="rounded"
				{...props}
			>
				<AvatarFallback
					size={size}
					className="bg-neutral-200 text-text-sm text-theme-text-secondary"
				>
					<div className="flex h-full w-full items-center justify-center">+{count}</div>
				</AvatarFallback>
			</Avatar>
		);

		if (!withPopover || items.length === 0) {
			return avatarContent;
		}

		const visibleItems = items.slice(0, maxItemsInPopover);
		const remainingCount = items.length - maxItemsInPopover;

		return (
			<Popover>
				<PopoverTrigger asChild>{avatarContent}</PopoverTrigger>
				<PopoverContent className="w-64 p-3">
					<div className="space-y-2">
						<p className="text-text-sm font-semibold text-theme-text-primary">
							{count} {count === 1 ? "user" : "users"}
						</p>
						<div className="space-y-2">
							{visibleItems.map((item, index) => (
								<div key={index} className="flex items-center gap-2">
									<Avatar size="sm" type="rounded">
										{item.src && <AvatarImage src={item.src} />}
										<AvatarFallback size="sm">{item.name[0]}</AvatarFallback>
									</Avatar>
									<span className="text-text-sm text-theme-text-primary truncate">
										{item.name}
									</span>
								</div>
							))}
							{remainingCount > 0 && (
								<p className="text-text-xs text-theme-text-secondary">
									and {remainingCount} more...
								</p>
							)}
						</div>
					</div>
				</PopoverContent>
			</Popover>
		);
	}
);
AvatarStackOverflow.displayName = "AvatarStackOverflow";

// ============================================================================
// Exports
// ============================================================================

export { AvatarStackRoot, AvatarStackItem, AvatarStackOverflow };