import { Meta } from "@storybook/react";
import React from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from "./index";
import { StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta = {
	title: "Elements/Command",
	component: Command,
	argTypes: {},
	parameters: {
		layout: "centered"
	},

	tags: ["autodocs"]
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
	name: "Default",
	render: () => (
		<Command className="rounded-md border border-theme-border-moderate shadow-md md:min-w-[450px]">
			<CommandInput placeholder="Type a command or search...">
				<Input className="w-full" inputSize="sm" />
			</CommandInput>
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem disabled>
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	)
};
