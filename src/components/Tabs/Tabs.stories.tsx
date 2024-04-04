import { Meta } from "@storybook/react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";
import { StoryObj } from "@storybook/react";

const meta = {
	title: "Elements/Tabs",
	component: Tabs,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Tabs",
	render: () => (
		<Tabs defaultValue="tab1">
			<TabsList>
				<TabsTrigger className="text-text-md" value="tab1">
					<span>Tab 1</span>
				</TabsTrigger>
				<TabsTrigger className="text-text-md" value="tab2">
					<span>Tab 2</span>
				</TabsTrigger>
				<TabsTrigger className="text-text-md" value="tab3">
					<span>Tab 3</span>
				</TabsTrigger>
			</TabsList>

			<TabsContent className="m-0 mt-5 border-0 bg-white p-0 h-[500px]" value="tab1">
				<div>Tab Content 1</div>
			</TabsContent>
			<TabsContent className="m-0 mt-5 border-0 bg-white p-0 h-[500px]" value="tab2">
				<div>Tab Content 2</div>
			</TabsContent>
			<TabsContent className="m-0 mt-5 border-0 bg-white p-0 h-[500px]" value="tab3">
				<div>Tab Content 3</div>
			</TabsContent>
		</Tabs>
	)
};
