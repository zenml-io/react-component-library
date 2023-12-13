import { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./Checkbox";

const meta = {
	title: "Elements/Checkbox/Checkbox",
	component: CheckboxComponent,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		onCheckedChange: { action: "clicked" },
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
		defaultChecked: { control: "boolean" },
		required: { control: "boolean" }
	},
	tags: ["autodocs"]
} as Meta<typeof CheckboxComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Box: Story = {
	args: {
		checked: false,
		disabled: false,
		defaultChecked: false,
		required: false,
		onCheckedChange: (checked: boolean) => console.log("Checkbox checked:", checked)
	}
};
