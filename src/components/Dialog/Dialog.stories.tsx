import { Meta } from "@storybook/react";
import React from "react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
	DialogDescription
} from "./index";
import { Button } from "../Button";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Dialog",
	component: Dialog,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<DialogDescription>Dialog Description</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button>Cancel</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
};
