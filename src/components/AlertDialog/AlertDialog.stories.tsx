import { Meta } from "@storybook/react-vite";
import React from "react";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel
} from "./index";
import { Button } from "../Button";
import { StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Elements/Alert Dialog",
	component: AlertDialog,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Open Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Dialog Title</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogDescription>Dialog Description</AlertDialogDescription>
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button>Cancel</Button>
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
};
