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
		onClick: { action: "clicked" },
		size: {
			description: "defining the size of the button",
			control: "select",
			defaultValue: "sm",
			options: ["sm", "lg", "xl"]
		},
		intent: {
			description: "defining the intent of the button",
			defaultValue: "primary",
			control: "select",
			options: ["primary", "secondary", "danger"]
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		children: "Hello World",
		size: "sm",
		intent: "primary"
	}
};
