import * as React from "react";

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
