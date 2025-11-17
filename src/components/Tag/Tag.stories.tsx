import { Meta } from "@storybook/react-vite";
import { Tag } from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Tag",
	component: Tag,
	argTypes: {
		rounded: {
			control: "boolean",
			defaultValue: true
		},
		size: {
			control: "select",
			defaultValue: "sm",
			options: ["sm", "xs"]
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
		size: "sm",
		rounded: true,
		emphasis: "minimal",
		color: "magenta",
		children: "Classified"
	}
};

export const subtle: Story = {
	name: "Subtle",
	args: {
		size: "sm",
		rounded: true,
		emphasis: "subtle",
		color: "magenta",
		children: "Classified"
	}
};

export const bold: Story = {
	name: "Bold",
	args: {
		size: "sm",
		rounded: true,
		emphasis: "bold",
		color: "magenta",
		children: "Classified"
	}
};
