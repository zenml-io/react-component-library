import { Meta } from "@storybook/react";
import React from "react";
import { SidebarHeader } from "./Sidebar";
import { CloseButton } from "../../../.storybook/assets/icons";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Sidebar",
	component: SidebarHeader,
	decorators: [
		(Story) => (
			<div className="group">
				<Story />
			</div>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof SidebarHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const sidebarHeader: Story = {
	name: "Sidebar Header",
	args: {
		title: "ZenML Tenant",
		icon: <CloseButton />
	}
};
