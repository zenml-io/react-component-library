import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
	EmptyStateRoot,
	EmptyStateIcon,
	EmptyStateTitle,
	EmptyStateDescription,
	EmptyStateActions,
	EmptyStateCode
} from "./index";
import { Button } from "../Button";

const meta = {
	title: "UI/EmptyState",
	component: EmptyStateRoot,
	parameters: {
		layout: "padded"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof EmptyStateRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

// Simple SVG icon for demonstration
const EmptyIcon = () => (
	<svg
		width="64"
		height="64"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="32" cy="32" r="28" fill="#F0F4FF" />
		<path
			d="M32 20V32M32 38V38.02M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32C20 25.3726 25.3726 20 32 20C38.6274 20 44 25.3726 44 32Z"
			stroke="#6366F1"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const Basic: Story = {
	render: () => (
		<div className="h-[400px]">
			<EmptyStateRoot>
				<EmptyStateIcon>
					<EmptyIcon />
				</EmptyStateIcon>
				<EmptyStateTitle>No items found</EmptyStateTitle>
				<EmptyStateDescription>
					There are no items to display at the moment.
				</EmptyStateDescription>
			</EmptyStateRoot>
		</div>
	)
};

export const WithActions: Story = {
	render: () => (
		<div className="h-[400px]">
			<EmptyStateRoot>
				<EmptyStateIcon>
					<EmptyIcon />
				</EmptyStateIcon>
				<EmptyStateTitle>No pipelines yet</EmptyStateTitle>
				<EmptyStateDescription>
					Get started by creating your first pipeline.{"\n"}
					Pipelines help you automate your ML workflows.
				</EmptyStateDescription>
				<EmptyStateActions>
					<Button variant="primary">Create Pipeline</Button>
					<Button variant="secondary">View Documentation</Button>
				</EmptyStateActions>
			</EmptyStateRoot>
		</div>
	)
};

export const WithCode: Story = {
	render: () => (
		<div className="h-[600px]">
			<EmptyStateRoot>
				<EmptyStateIcon>
					<EmptyIcon />
				</EmptyStateIcon>
				<EmptyStateTitle>Get started with ZenML</EmptyStateTitle>
				<EmptyStateDescription>
					Install ZenML and run your first pipeline in minutes.
				</EmptyStateDescription>
				<EmptyStateCode>
					<pre className="rounded-md bg-theme-surface-primary p-4 text-text-sm overflow-x-auto border border-theme-border-minimal">
						<code>{`pip install zenml
zenml init
zenml up`}</code>
					</pre>
				</EmptyStateCode>
			</EmptyStateRoot>
		</div>
	)
};

export const WithDecorativeIconBackground: Story = {
	name: "With Decorative Icon Background",
	render: () => (
		<div className="h-[400px]">
			<EmptyStateRoot>
				<EmptyStateIcon>
					<div className="rounded-full bg-primary-25 p-3">
						<svg
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4L4 8L12 12L20 8L12 4Z"
								stroke="#6366F1"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4 12L12 16L20 12"
								stroke="#6366F1"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4 16L12 20L20 16"
								stroke="#6366F1"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</EmptyStateIcon>
				<EmptyStateTitle>No stacks configured</EmptyStateTitle>
				<EmptyStateDescription>
					Create a stack to define your MLOps infrastructure.
				</EmptyStateDescription>
				<EmptyStateActions>
					<Button variant="primary">Create Stack</Button>
				</EmptyStateActions>
			</EmptyStateRoot>
		</div>
	)
};

export const FullExample: Story = {
	name: "Full Example",
	render: () => (
		<div className="h-[700px]">
			<EmptyStateRoot>
				<EmptyStateIcon>
					<div className="relative">
						<svg
							width="80"
							height="80"
							viewBox="0 0 80 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="80" height="80" rx="8" fill="#F0F4FF" />
							<path
								d="M40 28V40M40 46V46.02"
								stroke="#6366F1"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-25 p-2">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 14.66V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.34"
									stroke="#6366F1"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M18 2L22 6L12 16H8V12L18 2Z"
									stroke="#6366F1"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</EmptyStateIcon>
				<EmptyStateTitle>No runs found</EmptyStateTitle>
				<EmptyStateDescription>
					{`You haven't executed any pipeline runs yet.\nGet started by running your first pipeline with the command below.`}
				</EmptyStateDescription>
				<EmptyStateActions>
					<Button variant="primary">Run Pipeline</Button>
					<Button variant="secondary">View Examples</Button>
				</EmptyStateActions>
				<EmptyStateCode>
					<p className="mb-2 text-text-sm text-theme-text-secondary">
						Run your first pipeline:
					</p>
					<pre className="rounded-md bg-neutral-900 p-4 text-text-sm text-white overflow-x-auto">
						<code>{`from zenml import pipeline, step

@step
def load_data() -> dict:
	return {"data": [1, 2, 3]}

@pipeline
def my_pipeline():
	load_data()

if __name__ == "__main__":
	my_pipeline()`}</code>
					</pre>
				</EmptyStateCode>
			</EmptyStateRoot>
		</div>
	)
};

export const CustomStyling: Story = {
	name: "With Custom Styling",
	render: () => (
		<div className="h-[400px] bg-neutral-50">
			<EmptyStateRoot className="bg-white rounded-lg border border-theme-border-minimal p-8">
				<EmptyStateIcon className="mb-2">
					<div className="rounded-lg bg-error-50 p-4">
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56995 17.3333 3.53223 19 5.07183 19Z"
								stroke="#DC2626"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</EmptyStateIcon>
				<EmptyStateTitle className="text-error-700">
					Connection Failed
				</EmptyStateTitle>
				<EmptyStateDescription className="text-error-600">
					Unable to connect to the server.{"\n"}
					Please check your network connection and try again.
				</EmptyStateDescription>
				<EmptyStateActions>
					<Button variant="primary">Retry Connection</Button>
				</EmptyStateActions>
			</EmptyStateRoot>
		</div>
	)
};