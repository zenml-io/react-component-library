import { Meta } from "@storybook/react";
import React from "react";
import { Sidebar, SidebarMain, SidebarHeader, SidebarItem, SidebarItemContent } from "./index";
import { CPU, CloseButton } from "../../../.storybook/assets/icons";
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
				<SidebarHeader icon={<CloseButton />} title="ZenML Tenant" />
				<SidebarMain>
					<SidebarItem isActive={true}>
						<div>
							<SidebarItemContent isActive={true} icon={<CPU />} label="Models" />
						</div>
					</SidebarItem>
					<SidebarItem isActive={false}>
						<div>
							<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
						</div>
					</SidebarItem>
					<SidebarItem isActive={false}>
						<div>
							<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
						</div>
					</SidebarItem>
				</SidebarMain>
			</>
		)
	}
};
