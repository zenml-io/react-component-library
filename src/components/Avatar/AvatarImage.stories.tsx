import { Meta, StoryObj } from "@storybook/react";
import { AvatarFallback, AvatarImage, Avatar } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/Image",
	component: Avatar,
	parameters: {
		layout: "centered"
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
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
			<AvatarImage alt="Logo displayed for the tenant" src="https://placekitten.com/200/200" />
			<AvatarFallback>{args.children}</AvatarFallback>
		</Avatar>
	)
};
