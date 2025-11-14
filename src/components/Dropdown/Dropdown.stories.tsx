import { Meta } from "@storybook/react-vite";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator
} from "./index";
import { Button } from "../Button";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Dropdown",
	component: DropdownMenu,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Small",
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Open Dropdown</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" sideOffset={7}>
				<DropdownMenuItem>First Entry</DropdownMenuItem>
				<DropdownMenuItem>Second Entry</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Third Entry</DropdownMenuItem>
				<DropdownMenuItem>Fourth Entry</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
};
