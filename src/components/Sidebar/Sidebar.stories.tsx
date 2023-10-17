import { Meta } from "@storybook/react";
import React from "react";
import {
	Sidebar,
	SidebarList,
	SidebarHeader,
	SidebarItem,
	SidebarItemContent,
	SidebarBody,
	SidebarHeaderImage
} from "./index";
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

export const defaultStory: Story = {
	name: "Sidebar",
	args: {
		children: (
			<>
				<SidebarHeader icon={<CloseButton />} title="ZenML Tenant">
					<SidebarHeaderImage>
						<img src={`https://avatar.vercel.sh/ZenMLTenant?size=32`} />
					</SidebarHeaderImage>
				</SidebarHeader>
				<SidebarBody>
					<SidebarList>
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
					</SidebarList>
					<div style={{ marginTop: "auto" }}>
						<SidebarList>
							<SidebarItem>
								<div>
									<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</SidebarList>
					</div>
				</SidebarBody>
			</>
		)
	}
};
