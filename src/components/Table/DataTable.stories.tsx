import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import React from "react";
import { DataTable } from "./index";
import { ColumnDef } from "@tanstack/react-table";

type DummyData = {
	id: number;
	name: string;
	age: number;
};

const cols: ColumnDef<DummyData, unknown>[] = [
	{
		id: "id",
		header: "ID",
		accessorKey: "id"
	},
	{
		id: "name",
		header: "Name",
		accessorKey: "name"
	},
	{
		id: "age",
		header: "Age",
		accessorKey: "age"
	}
];

const data: DummyData[] = [
	{
		id: 1,
		name: "John Doe",
		age: 25
	},
	{
		id: 2,
		name: "Jane Doe",
		age: 24
	},
	{
		id: 3,
		name: "John Smith",
		age: 26
	},
	{
		id: 4,
		name: "Jane Smith",
		age: 27
	}
];

const meta = {
	title: "Elements/Table/DataTable",
	component: DataTable,

	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="w-[550px]">
				<Story />
			</div>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	args: {
		// @ts-expect-error Something with the type seems off here, it renders correctly though
		columns: cols,
		data: data
	}
};
