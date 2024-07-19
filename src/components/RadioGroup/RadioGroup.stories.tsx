import { Meta } from "@storybook/react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Radio Group",
	component: RadioGroup,
	decorators: [
		(Story) => (
			<div className="w-[400px] flex items-center justify-center bg-theme-surface-primary h-[200px]">
				<Story />
			</div>
		)
	],
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<label htmlFor="option-one">Option One</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<label htmlFor="option-two">Option Two</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem disabled value="option-three" id="option-three" />
				<label htmlFor="option-three">Option disabled</label>
			</div>
		</RadioGroup>
	)
};
