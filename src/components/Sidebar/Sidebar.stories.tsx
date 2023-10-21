import { Meta } from "@storybook/react";
import React from "react";
import {
	Sidebar,
	SidebarHeader,
	SidebarItem,
	SidebarItemContent,
	SidebarBody,
	SidebarHeaderImage,
	SidebarHeaderTitle,
	SidebarList
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
					<SidebarHeaderTitle>My Tenant</SidebarHeaderTitle>
				</SidebarHeader>
				<SidebarBody>
					<SidebarList>
						<li className="w-full">
							<SidebarItem isActive={true}>
								<div>
									<SidebarItemContent isActive={true} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
						<li className="w-full">
							<SidebarItem isActive={false}>
								<div>
									<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
						<li className="w-full">
							<SidebarItem isActive={false}>
								<div>
									<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
					</SidebarList>
					<div className="px-1 py-2 flex gap-0.5" style={{ marginTop: "auto" }}>
						<SidebarItem>
							<div>
								<SidebarItemContent isActive={false} icon={<CPU />} label="Models" />
							</div>
						</SidebarItem>
					</div>
				</SidebarBody>
			</>
		)
	}
};
