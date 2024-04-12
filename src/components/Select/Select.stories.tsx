import { Meta } from "@storybook/react";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Select",
	component: Select,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<Select>
			<SelectTrigger className="border border-theme-border-moderate bg-theme-surface-primary">
				<SelectValue placeholder="Select your Provider" />
			</SelectTrigger>
			<SelectContent className="">
				<SelectItem value="aws">Item 1</SelectItem>
				<SelectItem value="gcp">Item 2</SelectItem>
				<SelectItem value="azure">Item3</SelectItem>
			</SelectContent>
		</Select>
	)
};
