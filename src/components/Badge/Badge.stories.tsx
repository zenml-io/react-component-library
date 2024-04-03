import { Meta } from "@storybook/react";
import { Badge } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Badge",
	component: Badge,
	argTypes: {
		color: {
			control: "select",
			defaultValue: "green",
			options: [
				"green",
				"yellow",
				"light-purple",
				"purple",
				"blue",
				"light-grey",
				"grey",
				"red",
				"orange",
				"lime",
				"teal",
				"turquoise",
				"magenta"
			]
		},
		size: {
			control: "select",
			defaultValue: "sm",
			options: ["xs", "sm", "md"]
		},
		rounded: {
			control: "boolean",
			defaultValue: true
		}
	},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultVariant: Story = {
	name: "Default",
	args: {
		rounded: true,
		color: "green",
		size: "sm",
		children: "Badge"
	}
};
