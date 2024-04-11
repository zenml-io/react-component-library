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
import { Button } from "../Button";
import { CPU, CloseButton } from "../../../.storybook/assets/icons";
import { StoryObj } from "@storybook/react";
import { AppShell } from "../../../.storybook/assets/Appshell";
import { SidebarProvider, useSidebarContext } from "./SidebarContext";

const meta = {
	title: "UI/Sidebar",
	component: Sidebar,
	parameters: {
		layout: "fullscreen"
	},
	decorators: [
		(Story) => (
			<SidebarProvider initialOpen>
				<AppShell>
					<Story />
				</AppShell>
			</SidebarProvider>
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
				<SidebarHeader
					icon={
						<div>
							<SidebarButton />
						</div>
					}
					title="ZenML Tenant"
				>
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
									<SidebarItemContent svgStroke isActive={true} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
						<li className="w-full">
							<SidebarItem isActive={false}>
								<div>
									<SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
						<li className="w-full">
							<SidebarItem isActive={false}>
								<div>
									<SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
								</div>
							</SidebarItem>
						</li>
					</SidebarList>
					<div style={{ marginTop: "auto" }}>
						<SidebarItem>
							<div>
								<SidebarItemContent svgStroke isActive={false} icon={<CPU />} label="Models" />
							</div>
						</SidebarItem>
					</div>
				</SidebarBody>
			</>
		)
	}
};

function SidebarButton() {
	const { setIsOpen, isOpen } = useSidebarContext();
	return (
		<Button
			onClick={() => setIsOpen((prev) => !prev)}
			className={`w-6 bg-transparent h-6 p-0 flex items-center justify-center`}
			intent="secondary"
		>
			<CloseButton className={`w-4 h-4 aspect-square ${!isOpen && "rotate-180"}`} />
		</Button>
	);
}
