import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";

// EmptyStateRoot - section wrapper with centered layout
const emptyStateRootVariants = cva(
	"flex h-full w-full flex-1 flex-col items-center justify-center gap-5 layout-container"
);

export interface EmptyStateRootProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof emptyStateRootVariants> {
	asChild?: boolean;
}

const EmptyStateRoot = React.forwardRef<HTMLElement, EmptyStateRootProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "section";
		return <Comp ref={ref} className={cn(emptyStateRootVariants(), className)} {...props} />;
	}
);
EmptyStateRoot.displayName = "EmptyStateRoot";

// EmptyStateIcon - Icon container with optional decorative background
const emptyStateIconVariants = cva("relative flex items-center justify-center");

export interface EmptyStateIconProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof emptyStateIconVariants> {
	asChild?: boolean;
}

const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "div";
		return <Comp ref={ref} className={cn(emptyStateIconVariants(), className)} {...props} />;
	}
);
EmptyStateIcon.displayName = "EmptyStateIcon";

// EmptyStateTitle - Main heading
const emptyStateTitleVariants = cva(
	"text-display-xs font-semibold text-center whitespace-pre-line"
);

export interface EmptyStateTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof emptyStateTitleVariants> {
	asChild?: boolean;
}

const EmptyStateTitle = React.forwardRef<HTMLHeadingElement, EmptyStateTitleProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "h2";
		return <Comp ref={ref} className={cn(emptyStateTitleVariants(), className)} {...props} />;
	}
);
EmptyStateTitle.displayName = "EmptyStateTitle";

// EmptyStateDescription - Secondary text
const emptyStateDescriptionVariants = cva(
	"text-text-lg text-theme-text-secondary text-center whitespace-pre-line"
);

export interface EmptyStateDescriptionProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof emptyStateDescriptionVariants> {
	asChild?: boolean;
}

const EmptyStateDescription = React.forwardRef<HTMLParagraphElement, EmptyStateDescriptionProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "p";
		return (
			<Comp ref={ref} className={cn(emptyStateDescriptionVariants(), className)} {...props} />
		);
	}
);
EmptyStateDescription.displayName = "EmptyStateDescription";

// EmptyStateActions - Container for action buttons
const emptyStateActionsVariants = cva("flex items-center justify-center gap-3");

export interface EmptyStateActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmptyStateActions = React.forwardRef<HTMLDivElement, EmptyStateActionsProps>(
	({ className, ...props }, ref) => {
		return <div ref={ref} className={cn(emptyStateActionsVariants(), className)} {...props} />;
	}
);
EmptyStateActions.displayName = "EmptyStateActions";

// EmptyStateCode - Code block wrapper
const emptyStateCodeVariants = cva("mt-5 w-full max-w-2xl");

export interface EmptyStateCodeProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmptyStateCode = React.forwardRef<HTMLDivElement, EmptyStateCodeProps>(
	({ className, ...props }, ref) => {
		return <div ref={ref} className={cn(emptyStateCodeVariants(), className)} {...props} />;
	}
);
EmptyStateCode.displayName = "EmptyStateCode";

export {
	EmptyStateRoot,
	EmptyStateIcon,
	EmptyStateTitle,
	EmptyStateDescription,
	EmptyStateActions,
	EmptyStateCode
};