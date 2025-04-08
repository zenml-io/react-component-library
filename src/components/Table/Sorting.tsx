import React from "react";
import { Header, RowData, SortDirection } from "@tanstack/react-table";
import { PropsWithChildren } from "react";
import { ArrowUp, ArrowDown } from "./Icons";

type Props = {
	direction: SortDirection | false;
};

function SortingArrow({ direction }: Props) {
	if (direction === false) return null;

	const Comp = direction === "asc" ? ArrowUp : ArrowDown;

	return <Comp className="h-4 w-4 shrink-0" />;
}

interface HeaderProps<TData extends RowData, TValue> {
	header: Header<TData, TValue>;
}

export function SortableHeader<TData extends RowData, TValue>({
	header,
	children
}: PropsWithChildren<HeaderProps<TData, TValue>>) {
	return (
		<button
			className={`${
				header.column.getIsSorted() ? "text-theme-text-primary" : ""
			} flex h-full w-full items-center gap-1 px-4 py-2 text-text-sm transition-all duration-100 hover:bg-gray-200`}
			onClick={header.column.getToggleSortingHandler()}
		>
			<span>{children}</span>
			<SortingArrow direction={header.column.getIsSorted()} />
		</button>
	);
}
