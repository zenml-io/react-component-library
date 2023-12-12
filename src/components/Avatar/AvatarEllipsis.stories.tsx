import { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponent } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/Ellipsis",
	component: AvatarComponent
} as Meta<typeof AvatarComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const XS: Story = {
	args: {
		children: "+5",
		size: "xs",
		type: "ellipsis"
	}
};

export const SM: Story = {
	args: {
		children: "+5",
		size: "sm",
		type: "ellipsis"
	}
};

export const MD: Story = {
	args: {
		children: "+5",
		size: "md",
		type: "ellipsis"
	}
};

export const LG: Story = {
	args: {
		children: "+5",
		size: "lg",
		type: "ellipsis"
	}
};

export const XL: Story = {
	args: {
		children: "+5",
		size: "xl",
		type: "ellipsis"
	}
};

export const XXL: Story = {
	args: {
		children: "+5",
		size: "xxl",
		type: "ellipsis"
	}
};
