import { Meta } from "@storybook/react";
import { Box } from "./index";
import { StoryObj } from "@storybook/react";
import React from "react";

const meta = {
	title: "Elements/Box",
	component: Box,

	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="w-[400px] h-[200px]">
				<Story />
			</div>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	args: {
		className: "h-full"
	}
};
