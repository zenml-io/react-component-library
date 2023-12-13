import { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent } from "./Input";

const meta = {
	title: "Elements/Input/Input",
	component: InputComponent,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} as Meta<typeof InputComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SM: Story = {
	args: {
		value: "Text",
		inputSize: "sm",
		label: "Label small"
	}
};

export const MD: Story = {
	args: {
		value: "Text",
		inputSize: "md",
		label: "Label medium"
	}
};

export const LG: Story = {
	args: {
		value: "Text",
		inputSize: "lg",
		label: "Label large"
	}
};
