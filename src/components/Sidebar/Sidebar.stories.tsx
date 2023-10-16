import { Meta } from "@storybook/react";
import React from "react";
import { Sidebar, SidebarMain, SidebarHeader, SidebarItem } from "./index";
import CPU from "../../../.storybook/assets/CPU";
import { StoryObj } from "@storybook/react";
import { AppShell } from "../../../.storybook/assets/Appshell";

const meta = {
	title: "UI/Sidebar",
	component: Sidebar,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [
		(Story) => (
			<AppShell>
				<Story />
			</AppShell>
		)
	],
	tags: ["autodocs"]
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const small: Story = {
	name: "Sidebar",
	args: {
		children: (
			<>
				<SidebarHeader title="Adam" />
				<SidebarMain>
					<SidebarItem href="#" icon={<CPU className="w-5 h-5" />} label="Models" />
				</SidebarMain>
			</>
		)
	}
};
