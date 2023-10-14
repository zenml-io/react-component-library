import { Meta } from "@storybook/react";
import { Input } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Input",
	component: Input,
	argTypes: {
		label: {
			control: "text",
			defaultValue: "Label",
			description: "Label of the input"
		},
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
		placeholder: "Your input",
		inputSize: "sm",
		label: "Small Input"
	}
};

export const medium: Story = {
	name: "Medium",
	args: {
		label: "Medium Input",
		placeholder: "Your input",
		inputSize: "md"
	}
};

export const large: Story = {
	name: "Large",
	args: {
		label: "Large Input",
		placeholder: "Your input",
		inputSize: "lg"
	}
};
