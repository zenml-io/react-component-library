import { Meta } from "@storybook/react-vite";
import React from "react";
import {
	Collapsible,
	CollapsibleHeader,
	CollapsibleContent,
	CollapsibleTrigger,
	CollapsiblePanel
} from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Collapsible",
	component: Collapsible,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<CollapsiblePanel>
			<CollapsibleHeader>
				<CollapsibleTrigger>Click me to toggle</CollapsibleTrigger>
			</CollapsibleHeader>
			<CollapsibleContent className="border-t border-theme-border-moderate px-5 py-3">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
				</ul>
			</CollapsibleContent>
		</CollapsiblePanel>
	)
};
