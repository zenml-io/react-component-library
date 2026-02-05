import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utilities";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";

// KeyValueRoot - dl wrapper with grid layout and container query support
const KeyValueRoot = React.forwardRef<HTMLDListElement, React.HTMLAttributes<HTMLDListElement>>(
	({ className, ...props }, ref) => (
		<dl
			ref={ref}
			className={cn("@container grid grid-cols-3 gap-2", className)}
			{...props}
		/>
	)
);
KeyValueRoot.displayName = "KeyValueRoot";

// CVA variants for KeyValue sub-components
const keyValueKeyVariants = cva("flex items-center text-theme-text-secondary", {
	variants: {
		stacked: {
			true: "col-span-3",
			false: "col-span-3 @sm:col-span-1"
		},
		truncate: {
			true: "truncate min-w-0",
			false: ""
		}
	},
	defaultVariants: {
		stacked: false,
		truncate: false
	}
});

const keyValueValueVariants = cva("flex items-center text-neutral-700", {
	variants: {
		stacked: {
			true: "col-span-3",
			false: "col-span-3 @sm:col-span-2"
		},
		truncate: {
			true: "truncate min-w-0",
			false: ""
		}
	},
	defaultVariants: {
		stacked: false,
		truncate: false
	}
});

// KeyValueItem - convenience component
export interface KeyValueItemProps {
	label: React.ReactNode;
	value: React.ReactNode;
	stacked?: boolean;
	truncate?: boolean;
	withTooltip?: boolean;
	className?: string;
	keyClassName?: string;
	valueClassName?: string;
}

const KeyValueItem: React.FC<KeyValueItemProps> = ({
	label,
	value,
	stacked = false,
	truncate = false,
	withTooltip = false,
	keyClassName,
	valueClassName
}) => {
	const valueContent = (
		<dd
			className={cn(
				keyValueValueVariants({ stacked, truncate }),
				valueClassName
			)}
		>
			{value}
		</dd>
	);

	return (
		<>
			<dt className={cn(keyValueKeyVariants({ stacked, truncate }), keyClassName)}>
				{label}
			</dt>
			{truncate && withTooltip ? (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>{valueContent}</TooltipTrigger>
						<TooltipContent>
							<p>{value}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			) : (
				valueContent
			)}
		</>
	);
};

KeyValueItem.displayName = "KeyValueItem";

export { KeyValueRoot, KeyValueItem };
