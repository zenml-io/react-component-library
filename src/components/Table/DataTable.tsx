import React from "react";

import {
	ColumnDef,
	CoreOptions,
	ExpandedState,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	OnChangeFn,
	RowSelectionState,
	SortingState,
	useReactTable
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./Table";
import { SortableHeader } from "./Sorting";
import { cn } from "../..";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	filters?: Record<string, string>;
	resetFilters?: () => void;
	getRowId?: CoreOptions<TData>["getRowId"];
	rowSelection?: RowSelectionState;
	onRowSelectionChange?: OnChangeFn<RowSelectionState>;
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
	expanded?: ExpandedState;
	onExpandedChange?: OnChangeFn<ExpandedState>;
	getSubRows?: (row: TData) => TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
	filters,
	resetFilters,
	sorting,
	onSortingChange,
	expanded,
	onExpandedChange,
	getSubRows,
	getRowId,
	rowSelection = {},
	onRowSelectionChange
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns: columns.map((col) => {
			// if col.enableSorting is not defined, set it to false
			if (col.enableSorting === undefined) {
				col.enableSorting = false;
			}
			return col;
		}),
		manualSorting: true,
		onRowSelectionChange,
		onSortingChange,
		enableSortingRemoval: false,
		enableMultiSort: false,
		enableRowSelection: true,
		onExpandedChange,
		getRowId,
		getSubRows,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		state: {
			rowSelection,
			sorting,
			expanded
		}
	});

	return (
		<div className="overflow-hidden overflow-x-auto rounded-md border">
			<Table className="min-w-[500px]">
				<TableHeader className="bg-theme-surface-tertiary">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								const canSort = header.column.getCanSort();
								return (
									<TableHead
										className={cn(
											header.column.columnDef.meta?.className,
											`${
												canSort ? "p-0" : ""
											} bg-theme-surface-tertiary font-semibold text-theme-text-secondary`
										)}
										key={header.id}
										style={{
											width: header.column.columnDef.meta?.width
										}}
									>
										{canSort ? (
											<SortableHeader header={header}>
												{header.isPlaceholder
													? null
													: flexRender(header.column.columnDef.header, header.getContext())}
											</SortableHeader>
										) : header.isPlaceholder ? null : (
											flexRender(header.column.columnDef.header, header.getContext())
										)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								className="bg-theme-surface-primary"
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										className={cn(
											"font-medium text-theme-text-primary",
											cell.column.columnDef.meta?.className
										)}
										key={cell.id}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : filters && Object.keys(filters).length ? (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 bg-theme-surface-primary p-9 text-center"
							>
								<p className="text-text-lg text-theme-text-secondary">
									No items match your current selection.
								</p>
								<p className="text-text-lg text-theme-text-secondary">
									Refine your filters and try again.
								</p>
								<div className="mt-5">
									<p
										className="inline-block cursor-pointer text-text-lg text-theme-text-brand underline"
										onClick={resetFilters}
									>
										Clear filters
									</p>
								</div>
							</TableCell>
						</TableRow>
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 bg-theme-surface-primary p-9 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
