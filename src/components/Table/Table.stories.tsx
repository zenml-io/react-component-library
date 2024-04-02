import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import React from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "./index";

const rows = ["ID", "Name", "Age"];
const values = [
	["1", "John Doe", "25"],
	["2", "Jane Doe", "24"],
	["3", "John Smith", "26"],
	["4", "Jane Smith", "27"]
];

const meta = {
	title: "Elements/Table/Table",
	component: Table,

	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="w-[500px]">
				<Story />
			</div>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render() {
		return (
			<div className="overflow-hidden overflow-x-auto rounded-md border">
				<Table>
					<TableHeader className="bg-theme-surface-tertiary">
						<TableRow>
							{rows.map((rows, index) => {
								return (
									<TableHead className="text-theme-text-secondary" key={index}>
										{rows}
									</TableHead>
								);
							})}
						</TableRow>
					</TableHeader>
					<TableBody>
						{values.map((value, index) => {
							return (
								<TableRow key={index}>
									{value.map((val, i) => {
										return (
											<TableCell className="bg-theme-surface-primary" key={i}>
												{val}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		);
	}
};
