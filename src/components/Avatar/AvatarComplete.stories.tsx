import { Meta, StoryObj } from "@storybook/react";
import { CompleteAvatar as AvatarComponent } from "./Avatar";

const meta = {
	title: "Elements/Avatar/Circle",
	component: AvatarComponent,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		size: {
			description: "defining the size of the avatar",
			control: "select",
			defaultValue: "lg",
			options: ["xs", "sm", "md", "lg", "xl", "xxl"]
		},
		type: {
			description: "defining the type of the avatar",
			control: "select",
			defaultValue: "rounded",
			options: ["square", "rounded"]
		}
	},
	tags: ["autodocs"]
} as Meta<typeof AvatarComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const XS: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "xs"
	}
};

export const SM: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "sm"
	}
};

export const MD: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "md"
	}
};

export const LG: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "lg"
	}
};

export const XL: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "xl"
	}
};

export const XXL: Story = {
	args: {
		avatarUrl: "https://placekitten.com/200/200",
		size: "xxl"
	}
};
