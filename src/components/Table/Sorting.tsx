import React from "react";
import { Header, RowData /*, SortDirection*/ } from "@tanstack/react-table";
// TODO FIXME: importing directly not allowed?
// import ArrowUp from "../../assets/icons/arrow-up.svg";
// import ArrowDown from "../../assets/icons/arrow-down.svg";
import { PropsWithChildren } from "react";

/*
type Props = {
	direction: SortDirection | false;
};

function SortingArrow({ direction }: Props) {
	if (direction === false) return null;

	const Comp = direction === "asc" ? ArrowUp : ArrowDown;

	return <Comp className="h-4 w-4 shrink-0" />;
}
*/

interface HeaderProps<TData extends RowData> {
	header: Header<TData, unknown>;
}

export function SortableHeader<TData extends RowData>({
	header,
	children
}: PropsWithChildren<HeaderProps<TData>>) {
	return (
		<button
			className={`${
				header.column.getIsSorted() ? "text-theme-text-primary" : ""
			} flex h-full w-full items-center gap-1 px-4 py-2 text-text-sm transition-all duration-100 hover:bg-gray-200`}
			onClick={header.column.getToggleSortingHandler()}
		>
			<span>{children}</span>
			{/* <SortingArrow direction={header.column.getIsSorted()} /> */}
		</button>
	);
}
