import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { AvatarStackRoot, AvatarStackItem, AvatarStackOverflow } from "./index";
import { AvatarImage, AvatarFallback } from "../Avatar";

const meta = {
	title: "UI/AvatarStack",
	component: AvatarStackRoot,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		spacing: {
			description: "Amount of overlap between avatars",
			control: "select",
			options: ["sm", "md", "lg"]
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof AvatarStackRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockUsers = [
	{ name: "Alice Johnson", src: "https://avatar.vercel.sh/alice?size=40" },
	{ name: "Bob Smith", src: "https://avatar.vercel.sh/bob?size=40" },
	{ name: "Charlie Brown", src: "https://avatar.vercel.sh/charlie?size=40" },
	{ name: "Diana Prince", src: "https://avatar.vercel.sh/diana?size=40" },
	{ name: "Eve Anderson", src: "https://avatar.vercel.sh/eve?size=40" },
	{ name: "Frank Miller", src: "https://avatar.vercel.sh/frank?size=40" },
	{ name: "Grace Lee", src: "https://avatar.vercel.sh/grace?size=40" },
	{ name: "Henry Wilson", src: "https://avatar.vercel.sh/henry?size=40" }
];

export const Default: Story = {
	args: {
		spacing: "md"
	},
	render: (args) => (
		<AvatarStackRoot spacing={args.spacing}>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarImage src="https://avatar.vercel.sh/user1?size=40" />
				<AvatarFallback size="lg">AJ</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarImage src="https://avatar.vercel.sh/user2?size=40" />
				<AvatarFallback size="lg">BS</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarImage src="https://avatar.vercel.sh/user3?size=40" />
				<AvatarFallback size="lg">CB</AvatarFallback>
			</AvatarStackItem>
		</AvatarStackRoot>
	)
};

export const WithOverflow: Story = {
	name: "With Overflow",
	render: () => (
		<AvatarStackRoot spacing="md">
			{mockUsers.slice(0, 4).map((user) => (
				<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
					<AvatarImage src={user.src} />
					<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
				</AvatarStackItem>
			))}
			<AvatarStackOverflow count={4} size="lg" borderWidth={4} />
		</AvatarStackRoot>
	)
};

export const WithPopover: Story = {
	name: "With Popover (Hover +N)",
	render: () => (
		<div className="p-20">
			<AvatarStackRoot spacing="md">
				{mockUsers.slice(0, 4).map((user) => (
					<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
						<AvatarImage src={user.src} />
						<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
					</AvatarStackItem>
				))}
				<AvatarStackOverflow
					count={4}
					items={mockUsers.slice(4)}
					withPopover
					size="lg"
					borderWidth={4}
				/>
			</AvatarStackRoot>
		</div>
	)
};

export const DifferentSpacing: Story = {
	name: "Different Spacing Variants",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Small spacing (-6px)</p>
				<AvatarStackRoot spacing="sm">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
				</AvatarStackRoot>
			</div>
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Medium spacing (-10px)</p>
				<AvatarStackRoot spacing="md">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
				</AvatarStackRoot>
			</div>
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Large spacing (-14px)</p>
				<AvatarStackRoot spacing="lg">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
				</AvatarStackRoot>
			</div>
		</div>
	)
};

export const DifferentSizes: Story = {
	name: "Different Avatar Sizes",
	render: () => (
		<div className="space-y-8">
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Small avatars</p>
				<AvatarStackRoot spacing="sm">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="sm" type="rounded" borderWidth={2}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="sm">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow count={4} size="sm" borderWidth={2} />
				</AvatarStackRoot>
			</div>
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Medium avatars</p>
				<AvatarStackRoot spacing="sm">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="md" type="rounded" borderWidth={2}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="md">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow count={4} size="md" borderWidth={2} />
				</AvatarStackRoot>
			</div>
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Large avatars</p>
				<AvatarStackRoot spacing="md">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow count={4} size="lg" borderWidth={4} />
				</AvatarStackRoot>
			</div>
			<div className="space-y-2">
				<p className="text-text-sm text-theme-text-secondary">Extra large avatars</p>
				<AvatarStackRoot spacing="lg">
					{mockUsers.slice(0, 4).map((user) => (
						<AvatarStackItem key={user.name} size="xl" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="xl">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow count={4} size="xl" borderWidth={4} />
				</AvatarStackRoot>
			</div>
		</div>
	)
};

export const ManyUsers: Story = {
	name: "Many Users with Popover",
	render: () => {
		const manyUsers = Array.from({ length: 25 }, (_, i) => ({
			name: `User ${i + 1}`,
			src: `https://avatar.vercel.sh/user${i}?size=40`
		}));

		return (
			<div className="p-20">
				<AvatarStackRoot spacing="md">
					{manyUsers.slice(0, 5).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow
						count={20}
						items={manyUsers.slice(5)}
						withPopover
						size="lg"
						borderWidth={4}
						maxItemsInPopover={10}
					/>
				</AvatarStackRoot>
			</div>
		);
	}
};

export const InCard: Story = {
	name: "In Card Context",
	render: () => (
		<div className="w-[400px] rounded-md border border-theme-border-minimal bg-theme-surface-primary p-4 shadow-sm space-y-4">
			<div>
				<h3 className="text-text-lg font-semibold mb-1">Project Team</h3>
				<p className="text-text-sm text-theme-text-secondary mb-3">
					8 members working on this project
				</p>
				<AvatarStackRoot spacing="md">
					{mockUsers.slice(0, 5).map((user) => (
						<AvatarStackItem key={user.name} size="lg" type="rounded" borderWidth={4}>
							<AvatarImage src={user.src} />
							<AvatarFallback size="lg">{user.name[0]}</AvatarFallback>
						</AvatarStackItem>
					))}
					<AvatarStackOverflow
						count={3}
						items={mockUsers.slice(5)}
						withPopover
						size="lg"
						borderWidth={4}
					/>
				</AvatarStackRoot>
			</div>
		</div>
	)
};

export const WithFallbacks: Story = {
	name: "With Fallback Initials",
	render: () => (
		<AvatarStackRoot spacing="md">
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarFallback size="lg">AJ</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarFallback size="lg">BS</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarFallback size="lg">CB</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackItem size="lg" type="rounded" borderWidth={4}>
				<AvatarFallback size="lg">DP</AvatarFallback>
			</AvatarStackItem>
			<AvatarStackOverflow count={4} size="lg" borderWidth={4} />
		</AvatarStackRoot>
	)
};