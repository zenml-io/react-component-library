import { Meta } from "@storybook/react";
import { Button } from "./index";
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
			options: ["sm", "md", "lg"]
		},
		intent: {
			description: "defining the intent of the button",
			defaultValue: "primary",
			control: "select",
			options: ["primary", "secondary", "danger"]
		},
		asChild: {
			description: "if true, the props of the button are getting merged to the first child",
			defaultValue: false,
			control: "boolean"
		},
		emphasis: {
			description: "emphasis of the button",
			defaultValue: "bold",
			control: "select",
			options: ["bold", "subtle", "minimal"]
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Hello World",
		size: "sm",
		intent: "primary",
		emphasis: "bold"
	}
};

export const Secondary: Story = {
	args: {
		children: "Hello World",
		size: "sm",
		intent: "secondary",
		emphasis: "bold"
	}
};

export const Danger: Story = {
	args: {
		children: "Hello World",
		size: "sm",
		intent: "danger",
		emphasis: "bold"
	}
};

export const Small: Story = {
	args: {
		children: "Hello World",
		size: "sm",
		intent: "primary",
		emphasis: "bold"
	}
};

export const Large: Story = {
	args: {
		children: "Hello World",
		size: "md",
		intent: "primary",
		emphasis: "bold"
	}
};

export const ExtraLarge: Story = {
	args: {
		children: "Hello World",
		size: "lg",
		intent: "primary",
		emphasis: "bold"
	}
};

export const Bold: Story = {
	args: {
		children: "Hello World",
		emphasis: "bold",
		size: "lg",
		intent: "primary"
	}
};

export const Subtle: Story = {
	args: {
		children: "Hello World",
		size: "lg",
		emphasis: "subtle",
		intent: "primary"
	}
};

export const Minimal: Story = {
	args: {
		children: "Hello World",
		size: "lg",
		intent: "primary",
		emphasis: "minimal"
	}
};
