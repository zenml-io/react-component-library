import { Meta } from "@storybook/react-vite";
import { Switch } from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Switch",
	component: Switch,
	argTypes: {
		disabled: {
			control: "boolean",
			defaultValue: false,
			description: "if true, the switch is disabled"
		},
		defaultChecked: {
			control: "boolean",
			defaultValue: false,
			description: "if true, the switch is checked by default"
		},
		half: {
			control: "boolean",
			defaultValue: false
		}
	},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultVariant: Story = {
	name: "default",
	args: {
		defaultChecked: true,
		half: false,
		disabled: false
	}
};

export const half: Story = {
	name: "Half",
	args: {
		half: true,
		defaultChecked: true,
		disabled: false
	}
};
