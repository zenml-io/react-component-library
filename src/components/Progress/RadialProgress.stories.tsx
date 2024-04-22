import { Meta } from "@storybook/react";
import { RadialProgress } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Progress/Radial Progress",
	component: RadialProgress,

	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof RadialProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	args: {
		value: 45
	}
};
