import { Meta } from "@storybook/react-vite";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./index";
import { Button } from "../Button";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Popover",
	component: Popover,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open Popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[250px]">
				<div>Popover Content</div>
			</PopoverContent>
		</Popover>
	)
};
