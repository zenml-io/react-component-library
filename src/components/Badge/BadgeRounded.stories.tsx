import { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeComponent } from "./Badge";

const meta = {
	title: "Elements/Badge/Rounded",
	component: BadgeComponent
} as Meta<typeof BadgeComponent>;
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
		capitalized: true
	}
};

export const SuccessVariant: Story = {
	args: {
		children: "Success",
		variant: "success"
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
