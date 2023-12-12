import { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponent } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/User",
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
		type: "user"
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
		type: "user"
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
		type: "user"
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
		type: "user"
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
		type: "user"
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
		type: "user"
	}
};
