import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Numberbox } from "./index";

const meta = {
	title: "UI/Numberbox",
	component: Numberbox,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		intent: {
			description: "Visual style variant of the numberbox",
			control: "select",
			options: ["default", "disabled"]
		},
		children: {
			description: "Content to display inside the box (typically a number or icon)",
			control: "text"
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Numberbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		intent: "default",
		children: "1"
	}
};

export const Disabled: Story = {
	args: {
		intent: "disabled",
		children: "2"
	}
};

export const Sequence: Story = {
	name: "Number Sequence",
	render: () => (
		<div className="flex gap-4">
			<Numberbox intent="default">1</Numberbox>
			<Numberbox intent="default">2</Numberbox>
			<Numberbox intent="default">3</Numberbox>
			<Numberbox intent="disabled">4</Numberbox>
		</div>
	)
};

export const WithLargerNumbers: Story = {
	name: "With Larger Numbers",
	render: () => (
		<div className="flex gap-4">
			<Numberbox intent="default">10</Numberbox>
			<Numberbox intent="default">25</Numberbox>
			<Numberbox intent="default">99</Numberbox>
		</div>
	)
};

export const InStepIndicator: Story = {
	name: "In Step Indicator Context",
	render: () => (
		<div className="space-y-6">
			<div className="flex items-center gap-3">
				<Numberbox intent="default">1</Numberbox>
				<div>
					<h3 className="text-text-md font-semibold">Create Account</h3>
					<p className="text-text-sm text-theme-text-secondary">Set up your profile</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<Numberbox intent="default">2</Numberbox>
				<div>
					<h3 className="text-text-md font-semibold">Configure Settings</h3>
					<p className="text-text-sm text-theme-text-secondary">Customize your preferences</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<Numberbox intent="disabled">3</Numberbox>
				<div>
					<h3 className="text-text-md font-semibold text-theme-text-tertiary">Complete Setup</h3>
					<p className="text-text-sm text-theme-text-secondary">Finalize your configuration</p>
				</div>
			</div>
		</div>
	)
};