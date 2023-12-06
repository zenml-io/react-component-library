import { Meta } from "@storybook/react";
import React from "react";
import { Breadcrumb, Crumb } from "./index";
import { StoryObj } from "@storybook/react";
import { Dots } from "../../../.storybook/assets/icons";

const meta = {
	title: "UI/Breadcrumb",
	component: Breadcrumb,
	tags: ["autodocs"]
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultStory: Story = {
	name: "Breadcrumb",
	args: {
		startIcon: <Dots className="w-5 h-5" />,
		trunacteIcon: <Dots className="w-5 h-5" />,
		items: [
			<Crumb>
				<a href="#">First</a>
			</Crumb>,
			<Crumb>
				<a href="#">Second</a>
			</Crumb>,
			<Crumb>
				<a href="#">Third</a>
			</Crumb>,
			<Crumb>
				<a href="#">Fourth</a>
			</Crumb>,
			<Crumb>
				<a href="#">Fifth</a>
			</Crumb>,
			<Crumb>
				<a href="#">Very Very Very Very Long</a>
			</Crumb>,
			<Crumb>
				<a href="#">Sixth</a>
			</Crumb>
		]
	}
};
