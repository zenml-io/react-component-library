import { Meta, StoryObj } from "@storybook/react";
import { AvatarFallback, Avatar } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/Square",
	component: Avatar,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		size: {
			description: "defining the size of the avatar",
			control: "select",
			defaultValue: "lg",
			options: ["xs", "sm", "md", "lg", "xl", "xxl"]
		},
		type: {
			description: "defining the type of the avatar",
			control: "select",
			defaultValue: "square",
			options: ["square", "rounded"]
		}
	},
	tags: ["autodocs"]
} as Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const XS: Story = {
	args: {
		size: "xs",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};

export const SM: Story = {
	args: {
		size: "sm",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};

export const MD: Story = {
	args: {
		size: "md",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};

export const LG: Story = {
	args: {
		size: "lg",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};

export const XL: Story = {
	args: {
		size: "xl",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};

export const XXL: Story = {
	args: {
		size: "xxl",
		type: "square",
		children: "Z"
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};
