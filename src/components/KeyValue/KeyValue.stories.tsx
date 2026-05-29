import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { KeyValueRoot, KeyValueItem } from "./index";

const meta = {
	title: "UI/KeyValue",
	component: KeyValueRoot,
	parameters: {
		layout: "padded"
	},
	argTypes: {
		stacked: {
			description: "Whether to display key-value pairs in full-width stacked layout",
			control: "boolean"
		},
		truncate: {
			description: "Whether to truncate long values",
			control: "boolean"
		},
		withTooltip: {
			description: "Show tooltip on hover when truncated (only works with truncate=true)",
			control: "boolean"
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof KeyValueRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<KeyValueRoot className="w-96">
			<KeyValueItem label="Name" value="John Doe" />
			<KeyValueItem label="Email" value="john.doe@example.com" />
			<KeyValueItem label="Role" value="Administrator" />
			<KeyValueItem label="Status" value="Active" />
		</KeyValueRoot>
	)
};

export const Stacked: Story = {
	render: () => (
		<KeyValueRoot className="w-96">
			<KeyValueItem label="Name" value="John Doe" stacked />
			<KeyValueItem label="Email" value="john.doe@example.com" stacked />
			<KeyValueItem label="Role" value="Administrator" stacked />
			<KeyValueItem label="Description" value="This is a longer description that spans the full width when using stacked layout" stacked />
		</KeyValueRoot>
	)
};

export const WithTruncation: Story = {
	name: "With Truncation",
	render: () => (
		<KeyValueRoot className="w-96">
			<KeyValueItem
				label="Short"
				value="Normal value"
			/>
			<KeyValueItem
				label="Long"
				value="This is a very long value that will be truncated to fit within the available space"
				truncate
			/>
			<KeyValueItem
				label="With Tooltip"
				value="This is a very long value with a tooltip that appears when you hover over it"
				truncate
				withTooltip
			/>
		</KeyValueRoot>
	)
};

export const Mixed: Story = {
	name: "Mixed Layout",
	render: () => (
		<KeyValueRoot className="w-[500px]">
			<KeyValueItem label="Project" value="ZenML Component Library" stacked />
			<KeyValueItem label="Version" value="0.24.0" />
			<KeyValueItem label="Status" value="Active" />
			<KeyValueItem
				label="Description"
				value="A comprehensive React component library for building ZenML applications with consistent design patterns"
				stacked
				truncate
			/>
			<KeyValueItem
				label="Repository"
				value="https://github.com/zenml-io/react-component-library-with-a-very-long-url"
				truncate
				withTooltip
			/>
		</KeyValueRoot>
	)
};

export const InCard: Story = {
	name: "In Card Context",
	render: () => (
		<div className="w-[400px] rounded-md border border-theme-border-minimal bg-theme-surface-primary p-4 shadow-sm">
			<h3 className="mb-4 text-text-lg font-semibold">User Details</h3>
			<KeyValueRoot>
				<KeyValueItem label="ID" value="usr_1234567890" />
				<KeyValueItem label="Name" value="Jane Smith" />
				<KeyValueItem label="Email" value="jane.smith@zenml.io" />
				<KeyValueItem label="Role" value="Developer" />
				<KeyValueItem label="Team" value="Engineering" />
				<KeyValueItem label="Location" value="San Francisco, CA" />
			</KeyValueRoot>
		</div>
	)
};

export const WithCustomStyling: Story = {
	name: "With Custom Styling",
	render: () => (
		<KeyValueRoot className="w-96">
			<KeyValueItem
				label="Pipeline"
				value="training-pipeline-v2"
				keyClassName="font-semibold"
				valueClassName="font-mono text-primary-500"
			/>
			<KeyValueItem
				label="Runs"
				value="42"
				keyClassName="font-semibold"
				valueClassName="font-mono text-success-700"
			/>
			<KeyValueItem
				label="Duration"
				value="2h 34m"
				keyClassName="font-semibold"
				valueClassName="font-mono"
			/>
		</KeyValueRoot>
	)
};