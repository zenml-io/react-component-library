import { Meta } from "@storybook/react-vite";
import { Checkbox } from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Checkbox",
	component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const small: Story = {
	name: "Checkbox",
	args: {
		checked: true,
		disabled: false
	}
};
