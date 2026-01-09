import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utilities";

// ============================================================================
// usePagination Hook
// ============================================================================

export interface UsePaginationProps {
	currentPage: number;
	totalPages: number;
	siblingCount?: number;
	onPageChange: (page: number) => void;
}

export interface UsePaginationReturn {
	currentPage: number;
	totalPages: number;
	pages: (number | "ellipsis")[];
	canGoNext: boolean;
	canGoPrevious: boolean;
	goToPage: (page: number) => void;
	goToNext: () => void;
	goToPrevious: () => void;
	goToFirst: () => void;
	goToLast: () => void;
}

export function usePagination({
	currentPage,
	totalPages,
	siblingCount = 1,
	onPageChange
}: UsePaginationProps): UsePaginationReturn {
	const pages = React.useMemo(() => {
		const pageNumbers: (number | "ellipsis")[] = [];

		let leftEllipsisAdded = false;
		let rightEllipsisAdded = false;

		for (let i = 1; i <= totalPages; i++) {
			const isEllipsis =
				i > 1 && i < totalPages && Math.abs(i - currentPage) > siblingCount;

			if (
				i === 1 ||
				i === totalPages ||
				isEllipsis ||
				Math.abs(i - currentPage) <= siblingCount
			) {
				if (isEllipsis) {
					if (i < currentPage && !leftEllipsisAdded) {
						pageNumbers.push("ellipsis");
						leftEllipsisAdded = true;
					} else if (i > currentPage && !rightEllipsisAdded) {
						pageNumbers.push("ellipsis");
						rightEllipsisAdded = true;
					}
				} else {
					pageNumbers.push(i);
				}
			}
		}

		return pageNumbers;
	}, [currentPage, totalPages, siblingCount]);

	const canGoNext = currentPage < totalPages;
	const canGoPrevious = currentPage > 1;

	const goToPage = React.useCallback(
		(page: number) => {
			if (page >= 1 && page <= totalPages && page !== currentPage) {
				onPageChange(page);
			}
		},
		[currentPage, totalPages, onPageChange]
	);

	const goToNext = React.useCallback(() => {
		if (canGoNext) {
			goToPage(currentPage + 1);
		}
	}, [canGoNext, currentPage, goToPage]);

	const goToPrevious = React.useCallback(() => {
		if (canGoPrevious) {
			goToPage(currentPage - 1);
		}
	}, [canGoPrevious, currentPage, goToPage]);

	const goToFirst = React.useCallback(() => {
		goToPage(1);
	}, [goToPage]);

	const goToLast = React.useCallback(() => {
		goToPage(totalPages);
	}, [totalPages, goToPage]);

	return {
		currentPage,
		totalPages,
		pages,
		canGoNext,
		canGoPrevious,
		goToPage,
		goToNext,
		goToPrevious,
		goToFirst,
		goToLast
	};
}

// ============================================================================
// Pagination Context
// ============================================================================

interface PaginationContextValue extends UsePaginationReturn {}

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

export interface PaginationPreviousProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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

export interface PaginationNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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

export interface PaginationFirstProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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

export interface PaginationLastProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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