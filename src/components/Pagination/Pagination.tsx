import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";
import { usePagination, UsePaginationProps, UsePaginationReturn } from "./usePagination";

// Re-export hook types for external consumers
export type { UsePaginationProps, UsePaginationReturn };
export { usePagination };

// ============================================================================
// Pagination Context
// ============================================================================

type PaginationContextValue = UsePaginationReturn;

const PaginationContext = React.createContext<PaginationContextValue | null>(null);

function usePaginationContext() {
	const context = React.useContext(PaginationContext);
	if (!context) {
		throw new Error("Pagination compound components must be used within PaginationRoot");
	}
	return context;
}

// ============================================================================
// PaginationRoot
// ============================================================================

export interface PaginationRootProps
	extends React.HTMLAttributes<HTMLElement>,
		UsePaginationProps {}

const PaginationRoot = React.forwardRef<HTMLElement, PaginationRootProps>(
	({ className, currentPage, totalPages, siblingCount, onPageChange, children, ...props }, ref) => {
		const pagination = usePagination({ currentPage, totalPages, siblingCount, onPageChange });

		return (
			<PaginationContext.Provider value={pagination}>
				<nav
					ref={ref}
					role="navigation"
					aria-label="Pagination Navigation"
					className={cn("", className)}
					{...props}
				>
					{children}
				</nav>
			</PaginationContext.Provider>
		);
	}
);
PaginationRoot.displayName = "PaginationRoot";

// ============================================================================
// PaginationContent
// ============================================================================

const PaginationContent = React.forwardRef<
	HTMLUListElement,
	React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
	<ul ref={ref} className={cn("flex gap-1", className)} {...props} />
));
PaginationContent.displayName = "PaginationContent";

// ============================================================================
// PaginationItem
// ============================================================================

const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
	({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

// ============================================================================
// Button Variants
// ============================================================================

const paginationButtonVariants = cva(
	"group/button flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-300 hover:bg-neutral-200 active:border-neutral-400 active:bg-neutral-300 disabled:pointer-events-none disabled:bg-theme-surface-primary",
	{
		variants: {
			active: {
				true: "!bg-primary-500 text-theme-text-negative border-primary-500",
				false: ""
			}
		},
		defaultVariants: {
			active: false
		}
	}
);

// ============================================================================
// PaginationLink - Page number button
// ============================================================================

export interface PaginationLinkProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof paginationButtonVariants> {
	page: number;
	isActive?: boolean;
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
	({ className, page, isActive, ...props }, ref) => {
		const { currentPage, goToPage } = usePaginationContext();
		const active = isActive ?? currentPage === page;

		return (
			<button
				ref={ref}
				className={cn(paginationButtonVariants({ active }), className)}
				onClick={() => goToPage(page)}
				disabled={active}
				aria-label={`Go to page ${page}`}
				aria-current={active ? "page" : undefined}
				{...props}
			>
				{page}
			</button>
		);
	}
);
PaginationLink.displayName = "PaginationLink";

// ============================================================================
// PaginationPrevious
// ============================================================================

export type PaginationPreviousProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationPrevious = React.forwardRef<HTMLButtonElement, PaginationPreviousProps>(
	({ className, children, ...props }, ref) => {
		const { canGoPrevious, goToPrevious } = usePaginationContext();

		return (
			<button
				ref={ref}
				className={cn(paginationButtonVariants(), className)}
				onClick={goToPrevious}
				disabled={!canGoPrevious}
				aria-label="Go to previous page"
				{...props}
			>
				{children}
			</button>
		);
	}
);
PaginationPrevious.displayName = "PaginationPrevious";

// ============================================================================
// PaginationNext
// ============================================================================

export type PaginationNextProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationNext = React.forwardRef<HTMLButtonElement, PaginationNextProps>(
	({ className, children, ...props }, ref) => {
		const { canGoNext, goToNext } = usePaginationContext();

		return (
			<button
				ref={ref}
				className={cn(paginationButtonVariants(), className)}
				onClick={goToNext}
				disabled={!canGoNext}
				aria-label="Go to next page"
				{...props}
			>
				{children}
			</button>
		);
	}
);
PaginationNext.displayName = "PaginationNext";

// ============================================================================
// PaginationFirst
// ============================================================================

export type PaginationFirstProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationFirst = React.forwardRef<HTMLButtonElement, PaginationFirstProps>(
	({ className, children, ...props }, ref) => {
		const { currentPage, goToFirst } = usePaginationContext();
		const disabled = currentPage === 1;

		return (
			<button
				ref={ref}
				className={cn(paginationButtonVariants(), className)}
				onClick={goToFirst}
				disabled={disabled}
				aria-label="Go to first page"
				{...props}
			>
				{children}
			</button>
		);
	}
);
PaginationFirst.displayName = "PaginationFirst";

// ============================================================================
// PaginationLast
// ============================================================================

export type PaginationLastProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationLast = React.forwardRef<HTMLButtonElement, PaginationLastProps>(
	({ className, children, ...props }, ref) => {
		const { currentPage, totalPages, goToLast } = usePaginationContext();
		const disabled = currentPage === totalPages;

		return (
			<button
				ref={ref}
				className={cn(paginationButtonVariants(), className)}
				onClick={goToLast}
				disabled={disabled}
				aria-label="Go to last page"
				{...props}
			>
				{children}
			</button>
		);
	}
);
PaginationLast.displayName = "PaginationLast";

// ============================================================================
// PaginationEllipsis
// ============================================================================

const PaginationEllipsis = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex h-9 w-9 items-center justify-center rounded-sm border border-theme-border-moderate",
				className
			)}
			aria-hidden="true"
			{...props}
		>
			{children || "..."}
		</div>
	)
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// ============================================================================
// Exports
// ============================================================================

export {
	PaginationRoot,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationFirst,
	PaginationLast,
	PaginationEllipsis
};
