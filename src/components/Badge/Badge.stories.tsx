import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta = {
	title: "Elements/Badge",
	component: Badge
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Text",
		rounded: false
	}
};

export const Capitalized: Story = {
	args: {
		children: "Capitalized",
		capitalized: true,
		rounded: true
	}
};

export const SuccessVariant: Story = {
	args: {
		children: "Success",
		variant: "success",
		rounded: false
	}
};

export const WarningVariant: Story = {
	args: {
		children: "Warning",
		variant: "warning"
	}
};

export const InfoVariant: Story = {
	args: {
		children: "Info",
		variant: "info"
	}
};
export const GrayVariant: Story = {
	args: {
		children: "Gray",
		variant: "gray"
	}
};

export const DisabledVariant: Story = {
	args: {
		children: "Failed",
		variant: "disabled"
	}
};
DisabledVariant;
