import { Meta } from "@storybook/react";
import { Input } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Input",
	component: Input,
	argTypes: {
		disabled: {
			control: "boolean",
			defaultValue: false,
			description: "if true, the input is disabled"
		}
	},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const small: Story = {
	name: "Small",
	args: {
		placeholder: "Small input",
		inputSize: "sm"
	}
};

export const medium: Story = {
	name: "Medium",
	args: {
		placeholder: "Medium input",
		inputSize: "md"
	}
};

export const large: Story = {
	name: "Large",
	args: {
		placeholder: "Large input",
		inputSize: "lg",
		disabled: true
	}
};
