import { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponent } from "./Avatar";
import React from "react";

const meta = {
	title: "Elements/Avatar/Text Square",
	component: AvatarComponent
} as Meta<typeof AvatarComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const XS: Story = {
	args: {
		children: "Z",
		size: "xs",
		type: "textSquare"
	}
};

export const SM: Story = {
	args: {
		children: "Z",
		size: "sm",
		type: "textSquare"
	}
};

export const MD: Story = {
	args: {
		children: "Z",
		size: "md",
		type: "textSquare"
	}
};

export const LG: Story = {
	args: {
		children: "Z",
		size: "lg",
		type: "textSquare"
	}
};

export const XL: Story = {
	args: {
		children: "Z",
		size: "xl",
		type: "textSquare"
	}
};

export const XXL: Story = {
	args: {
		children: "Z",
		size: "xxl",
		type: "textSquare"
	}
};
