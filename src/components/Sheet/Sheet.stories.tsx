import { Meta } from "@storybook/react";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./index";
import { Button } from "../Button";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Sheet",
	component: Sheet,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open</Button>
			</SheetTrigger>
			<SheetContent className="w-[1000px] overflow-y-auto">
				<div className="p-4">
					<SheetClose>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-x"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#000000"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M18 6l-12 12" />
							<path d="M6 6l12 12" />
						</svg>
					</SheetClose>
					<h1 className="text-2xl font-bold">Sheet</h1>
					<p className="text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, nisl non
						ultricies ultricies, mi nisl ornare est, nec ullamcorper mi libero eget nisl. Donec
						auctor, elit nec ultricies ultricies, mi nisl ornare est, nec ullamcorper mi libero eget
						nisl. Donec auctor, elit nec ultricies ultricies, mi nisl ornare est, nec ullamcorper mi
						libero eget nisl.
					</p>
				</div>
			</SheetContent>
		</Sheet>
	)
};
