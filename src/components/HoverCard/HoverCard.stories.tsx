import { Meta } from "@storybook/react";
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from ".";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/HoverCard",
	component: HoverCard,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<HoverCard>
			<HoverCardTrigger className="border border-theme-border-moderate px-3 py-2 bg-theme-surface-primary rounded-md">
				Hover
			</HoverCardTrigger>
			<HoverCardContent>This is a hover card</HoverCardContent>
		</HoverCard>
	)
};
