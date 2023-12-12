import React from "react";
import { Meta, Story } from "@storybook/react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator
} from "./Dropdown";

export default {
	title: "DropdownMenu",
	component: DropdownMenu,
	subcomponents: {
		Trigger: DropdownMenuTrigger,
		Content: DropdownMenuContent,
		Item: DropdownMenuItem,
		Label: DropdownMenuLabel,
		Separator: DropdownMenuSeparator
	}
} as Meta;

const Template: Story = (args) => (
	<DropdownMenu {...args}>
		<DropdownMenuTrigger>
			<button>Trigger</button>
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
);

export const Basic = Template.bind({});
Basic.args = {};
