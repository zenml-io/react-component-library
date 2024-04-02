"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./Table";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = useState({});
	const table = useReactTable({
		data,
		columns,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		state: {
			rowSelection
		}
	});

	return (
		<div className="overflow-hidden overflow-x-auto rounded-md border">
			<Table className="min-w-[500px]">
				<TableHeader className="bg-theme-surface-tertiary">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										className="text-theme-text-secondary"
										key={header.id}
										// @ts-expect-error width doesnt exist on the type, and would need a global fragmentation
										style={{ width: header.column.columnDef.meta?.width || undefined }}
									>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
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
									<TableCell className="font-medium text-theme-text-primary" key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
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
