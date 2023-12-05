import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta = {
	title: "Elements/Badge",
	component: Badge
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Capitalized: Story = {
	args: {
		capitalized: true
	}
};

export const SuccessVariant: Story = {
	args: {
		variant: "success"
	}
};

export const WarningVariant: Story = {
	args: {
		variant: "warning"
	}
};

export const InfoVariant: Story = {
	args: {
		variant: "info"
	}
};
export const GrayVariant: Story = {
	args: {
		variant: "gray"
	}
};

export const DisabledVariant: Story = {
	args: {
		variant: "disabled"
	}
};
DisabledVariant;
