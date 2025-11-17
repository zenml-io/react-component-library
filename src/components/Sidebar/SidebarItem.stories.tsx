import { Meta } from "@storybook/react-vite";
import React from "react";
import { SidebarItem, SidebarItemContent } from "./Sidebar";
import { CPU } from "../../../.storybook/assets/icons";
import { StoryObj } from "@storybook/react-vite";
import { SidebarProvider } from "./SidebarContext";

const meta = {
	title: "UI/Sidebar",
	component: SidebarItem,
	decorators: [
		(Story) => (
			<ul style={{ listStyle: "none" }} className="group">
				<SidebarProvider initialOpen={false}>
					<Story />
				</SidebarProvider>
			</ul>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const inactive: Story = {
	name: "Inactive Sidebar Item",
	args: {
		isActive: false,
		children: (
			<div>
				<SidebarItemContent svgStroke icon={<CPU />} label="Models" />
			</div>
		)
	}
};

export const active: Story = {
	name: "Active Sidebar Item",
	args: {
		isActive: true,
		children: (
			<div>
				<SidebarItemContent svgStroke isActive={true} icon={<CPU />} label="Models" />
			</div>
		)
	}
};
