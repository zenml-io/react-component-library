import { Meta } from "@storybook/react-vite";
import React from "react";
import { Toaster, Toast, toast } from "./index";
import { StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";

const meta = {
	title: "Elements/Toast",
	component: Toast,
	argTypes: {
		emphasis: {
			description: "Emphasis of the toast",
			control: "select",
			defaultValue: "subtle",
			options: ["subtle", "bold"]
		},
		status: {
			description: "Status of the toast",
			control: "select",
			defaultValue: "default",
			options: ["default", "error", "success", "warning"]
		},
		rounded: {
			control: "boolean",
			defaultValue: true
		}
	},
	parameters: {
		layout: "centered"
	},
	decorators: [
		(Story) => (
			<div className="min-w-[800px] flex items-center justify-center min-h-[1000px]">
				<Story />
			</div>
		)
	],

	tags: ["autodocs"]
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Toast",
	argTypes: {
		// @ts-expect-error for some reason a wrong type is picked up there
		emphasis: "subtle",
		// @ts-expect-error for some reason a wrong type is picked up there
		status: "error",
		// @ts-expect-error for some reason a wrong type is picked up there
		rounded: "true"
	},
	render: ({ emphasis, status, rounded }) => (
		<div>
			<Button
				onClick={() => {
					toast({
						status,
						emphasis,
						description: "This is a toast message",
						rounded
					});
				}}
			>
				Add Toast
			</Button>
			<Toaster />
		</div>
	)
};
