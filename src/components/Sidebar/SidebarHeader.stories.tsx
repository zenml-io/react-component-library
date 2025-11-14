import { Meta } from "@storybook/react-vite";
import React from "react";
import { SidebarHeader, SidebarHeaderImage } from "./Sidebar";
import { CloseButton } from "../../../.storybook/assets/icons";
import { StoryObj } from "@storybook/react-vite";
import { SidebarProvider } from "./SidebarContext";

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
		icon: <CloseButton className="w-6 h-6" />,
		children: (
			<SidebarProvider initialOpen={false}>
				<SidebarHeaderImage>
					<img src={`https://avatar.vercel.sh/ZenMLTenant?size=32`} />
				</SidebarHeaderImage>
			</SidebarProvider>
		)
	}
};
