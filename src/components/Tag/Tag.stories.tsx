import { Meta } from "@storybook/react";
import { Tag } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Tag",
	component: Tag,
	argTypes: {
		rounded: {
			control: "boolean",
			defaultValue: true
		},
		emphasis: {
			control: "select",
			defaultValue: "subtle",
			options: ["bold", "subtle", "minimal"]
		},
		color: {
			control: "select",
			defaultValue: "blue",
			options: [
				"grey",
				"purple",
				"green",
				"yellow",
				"red",
				"blue",
				"teal",
				"lime",
				"magenta",
				"turquoise",
				"orange"
			]
		}
	},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const minimal: Story = {
	name: "Minimal",
	args: {
		rounded: true,
		emphasis: "minimal",
		color: "magenta",
		children: "Classified"
	}
};

export const subtle: Story = {
	name: "Subtle",
	args: {
		rounded: true,
		emphasis: "subtle",
		color: "magenta",
		children: "Classified"
	}
};

export const bold: Story = {
	name: "Bold",
	args: {
		rounded: true,
		emphasis: "bold",
		color: "magenta",
		children: "Classified"
	}
};
