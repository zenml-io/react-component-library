import { Meta } from "@storybook/react";
import { Button } from "./Button";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		onClick: { action: "clicked" }
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		children: "Hello World"
	}
};
