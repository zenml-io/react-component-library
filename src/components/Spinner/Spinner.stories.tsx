import { Meta } from "@storybook/react-vite";
import { Spinner } from "./index";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Spinner",
	component: Spinner,

	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default"
};
