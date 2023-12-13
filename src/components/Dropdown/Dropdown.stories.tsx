import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator
} from "./Dropdown";

const meta = {
	title: "Elements/Dropdown/Dropdown",
	component: DropdownMenu,
	subcomponents: {
		Trigger: DropdownMenuTrigger,
		Content: DropdownMenuContent,
		Item: DropdownMenuItem,
		Label: DropdownMenuLabel,
		Separator: DropdownMenuSeparator
	},
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "xs",
		type: "square",
		children: "Settings"
	},
	render: (args) => (
		<DropdownMenu {...args}>
			<DropdownMenuTrigger>
				<button>{args.children}</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Item 1</DropdownMenuItem>
				<DropdownMenuItem>Item 2</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Item 3</DropdownMenuItem>
				<DropdownMenuLabel>Label</DropdownMenuLabel>
				<DropdownMenuItem>Item 4</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
};
