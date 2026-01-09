import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Separator } from "./index";

const meta = {
	title: "UI/Separator",
	component: Separator,
	parameters: {
		layout: "padded"
	},
	argTypes: {
		orientation: {
			description: "The orientation of the separator",
			control: "select",
			options: ["horizontal", "vertical"]
		},
		decorative: {
			description: "Whether the separator is purely decorative (no semantic meaning)",
			control: "boolean"
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Horizontal",
	args: {
		orientation: "horizontal",
		decorative: true
	},
	render: (args) => (
		<div className="w-full space-y-4">
			<div>
				<h3 className="text-text-lg font-semibold">Section 1</h3>
				<p className="text-text-sm text-theme-text-secondary">Content above the separator</p>
			</div>
			<Separator {...args} />
			<div>
				<h3 className="text-text-lg font-semibold">Section 2</h3>
				<p className="text-text-sm text-theme-text-secondary">Content below the separator</p>
			</div>
		</div>
	)
};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
		decorative: true
	},
	render: (args) => (
		<div className="flex h-32 items-center gap-4">
			<div className="space-y-1">
				<h3 className="text-text-lg font-semibold">Left</h3>
				<p className="text-text-sm text-theme-text-secondary">Content on the left</p>
			</div>
			<Separator {...args} />
			<div className="space-y-1">
				<h3 className="text-text-lg font-semibold">Right</h3>
				<p className="text-text-sm text-theme-text-secondary">Content on the right</p>
			</div>
		</div>
	)
};

export const InMenu: Story = {
	name: "In Menu Context",
	args: {
		orientation: "horizontal",
		decorative: true
	},
	render: (args) => (
		<div className="w-64 rounded-md border border-theme-border-minimal bg-theme-surface-primary p-2 shadow-md">
			<div className="px-2 py-1.5 text-text-sm font-medium">Menu Items</div>
			<Separator {...args} className="my-1" />
			<div className="space-y-1">
				<div className="rounded-sm px-2 py-1.5 text-text-sm hover:bg-theme-surface-secondary">
					Item 1
				</div>
				<div className="rounded-sm px-2 py-1.5 text-text-sm hover:bg-theme-surface-secondary">
					Item 2
				</div>
			</div>
			<Separator {...args} className="my-1" />
			<div className="space-y-1">
				<div className="rounded-sm px-2 py-1.5 text-text-sm hover:bg-theme-surface-secondary">
					Item 3
				</div>
			</div>
		</div>
	)
};