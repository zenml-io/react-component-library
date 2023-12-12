import { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponent } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/User Square",
	component: AvatarComponent
} as Meta<typeof AvatarComponent>;
export default meta;

type Story = StoryObj<typeof meta>;
export const XS: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "xs",
		type: "userSquare"
	}
};

export const SM: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "sm",
		type: "userSquare"
	}
};

export const MD: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "md",
		type: "userSquare"
	}
};

export const LG: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "lg",
		type: "userSquare"
	}
};

export const XL: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "xl",
		type: "userSquare"
	}
};

export const XXL: Story = {
	args: {
		children: (
			<img
				src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWVOMIyZyQjNZAlHFWnrjo02TxNjO7lPRO2QiX7l7o2RvUyZq0"
				alt=""
			/>
		),
		size: "xxl",
		type: "userSquare"
	}
};
