import { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./Checkbox";
import React from "react";

const meta = {
	title: "Elements/Checkbox/Checkbox",
	component: CheckboxComponent
} as Meta<typeof CheckboxComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Mixed: Story = {
	args: {
		children: "mixed"
	}
};

export const Selected: Story = {
	args: {
		children: ""
	}
};
