import { Meta } from "@storybook/react-vite";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="w-[400px] flex items-center justify-center h-[200px]">
				<Story />
			</div>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<TooltipProvider>
			<Tooltip delayDuration={200}>
				<TooltipTrigger>Hover me!</TooltipTrigger>
				<TooltipContent>I am a tooltip</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
};
