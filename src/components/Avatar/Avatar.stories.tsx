import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./index";
import React from "react";

const meta = {
	title: "UI/Avatar",
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
		type: "rounded"
	},
	render: (args) => (
		<>
			<Avatar size={args.size} type={args.type}>
				<AvatarImage src="https://avatar.vercel.sh/randomValue?size=24" />
				<AvatarFallback size={args.size}>RV</AvatarFallback>
			</Avatar>
			<Avatar size={args.size} type={args.type}>
				<AvatarFallback size={args.size}>RV</AvatarFallback>
			</Avatar>
		</>
	)
};
