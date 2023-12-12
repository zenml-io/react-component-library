import { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeComponent } from "./Badge";

const meta = {
	title: "Elements/Badge/Default",
	component: BadgeComponent,
	argTypes: {
		rounded: {
			control: "boolean"
		}
	}
} satisfies Meta<typeof BadgeComponent>;
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
		rounded: false
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
		variant: "warning",
		rounded: false
	}
};

export const InfoVariant: Story = {
	args: {
		children: "Info",
		variant: "info",
		rounded: false
	}
};
export const GrayVariant: Story = {
	args: {
		children: "Gray",
		variant: "gray",
		rounded: false
	}
};

export const DisabledVariant: Story = {
	args: {
		children: "Failed",
		variant: "disabled",
		rounded: false
	}
};
DisabledVariant;
