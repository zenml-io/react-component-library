import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Avatar, CompleteAvatar } from "./index";
import React from "react";

const meta = {
	title: "UI/CompleteAvatar",
	component: Avatar,
	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="flex items-center gap-7">
				<Story />
			</div>
		)
	],
	argTypes: {
		size: {
			description: "defining the size of the avatar",
			control: "select",
			defaultValue: "md",
			options: ["xs", "sm", "md", "lg", "xl", "xxl"]
		},
		type: {
			description: "defining the type of the avatar",
			control: "select",
			defaultValue: "rounded",
			options: ["rounded", "square"]
		}
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	args: {
		size: "md",
		type: "square"
	},
	render: () => (
		<>
			<CompleteAvatar
				size="xl"
				type="square"
				avatarUrl="https://avatar.vercel.sh/randomValue?size=24"
				fallbackValue="default"
			/>
		</>
	)
};
