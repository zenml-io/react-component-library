import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
	PaginationRoot,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationFirst,
	PaginationLast,
	PaginationEllipsis
} from "./index";

const meta = {
	title: "UI/Pagination",
	component: PaginationRoot,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof PaginationRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

// Icon components for demonstration
const ChevronLeft = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10 12L6 8L10 4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ChevronRight = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6 12L10 8L6 4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ChevronLeftDouble = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11 12L7 8L11 4M7 12L3 8L7 4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ChevronRightDouble = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M5 12L9 8L5 4M9 12L13 8L9 4"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const DotsHorizontal = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="3" cy="8" r="1" fill="currentColor" />
		<circle cx="8" cy="8" r="1" fill="currentColor" />
		<circle cx="13" cy="8" r="1" fill="currentColor" />
	</svg>
);

export const Default: Story = {
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(1);

		return (
			<PaginationRoot currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}>
				<PaginationContent>
					<PaginationItem>
						<PaginationFirst>
							<ChevronLeftDouble />
						</PaginationFirst>
					</PaginationItem>
					<PaginationItem>
						<PaginationPrevious>
							<ChevronLeft />
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={1} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={2} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={3} />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis>
							<DotsHorizontal />
						</PaginationEllipsis>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={10} />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext>
							<ChevronRight />
						</PaginationNext>
					</PaginationItem>
					<PaginationItem>
						<PaginationLast>
							<ChevronRightDouble />
						</PaginationLast>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		);
	}
};

export const WithDynamicPages: Story = {
	name: "Dynamic Pages (Auto-calculated)",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(5);

		return (
			<div className="space-y-4">
				<p className="text-text-sm text-theme-text-secondary">
					Current page: {currentPage} of 20
				</p>
				<PaginationRoot currentPage={currentPage} totalPages={20} onPageChange={setCurrentPage}>
					<PaginationContent>
						<PaginationItem>
							<PaginationFirst>
								<ChevronLeftDouble />
							</PaginationFirst>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious>
								<ChevronLeft />
							</PaginationPrevious>
						</PaginationItem>
						{/* Render pages dynamically using the hook */}
						<PaginationItem>
							<PaginationLink page={1} />
						</PaginationItem>
						{currentPage > 3 && (
							<PaginationItem>
								<PaginationEllipsis>
									<DotsHorizontal />
								</PaginationEllipsis>
							</PaginationItem>
						)}
						{currentPage > 2 && (
							<PaginationItem>
								<PaginationLink page={currentPage - 1} />
							</PaginationItem>
						)}
						{currentPage !== 1 && currentPage !== 20 && (
							<PaginationItem>
								<PaginationLink page={currentPage} />
							</PaginationItem>
						)}
						{currentPage < 19 && (
							<PaginationItem>
								<PaginationLink page={currentPage + 1} />
							</PaginationItem>
						)}
						{currentPage < 18 && (
							<PaginationItem>
								<PaginationEllipsis>
									<DotsHorizontal />
								</PaginationEllipsis>
							</PaginationItem>
						)}
						<PaginationItem>
							<PaginationLink page={20} />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext>
								<ChevronRight />
							</PaginationNext>
						</PaginationItem>
						<PaginationItem>
							<PaginationLast>
								<ChevronRightDouble />
							</PaginationLast>
						</PaginationItem>
					</PaginationContent>
				</PaginationRoot>
			</div>
		);
	}
};

export const FewPages: Story = {
	name: "Few Pages (No Ellipsis)",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(2);

		return (
			<PaginationRoot currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage}>
				<PaginationContent>
					<PaginationItem>
						<PaginationFirst>
							<ChevronLeftDouble />
						</PaginationFirst>
					</PaginationItem>
					<PaginationItem>
						<PaginationPrevious>
							<ChevronLeft />
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={1} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={2} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={3} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={4} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={5} />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext>
							<ChevronRight />
						</PaginationNext>
					</PaginationItem>
					<PaginationItem>
						<PaginationLast>
							<ChevronRightDouble />
						</PaginationLast>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		);
	}
};

export const OnFirstPage: Story = {
	name: "On First Page (Disabled Prev)",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(1);

		return (
			<PaginationRoot currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}>
				<PaginationContent>
					<PaginationItem>
						<PaginationFirst>
							<ChevronLeftDouble />
						</PaginationFirst>
					</PaginationItem>
					<PaginationItem>
						<PaginationPrevious>
							<ChevronLeft />
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={1} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={2} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={3} />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis>
							<DotsHorizontal />
						</PaginationEllipsis>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={10} />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext>
							<ChevronRight />
						</PaginationNext>
					</PaginationItem>
					<PaginationItem>
						<PaginationLast>
							<ChevronRightDouble />
						</PaginationLast>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		);
	}
};

export const OnLastPage: Story = {
	name: "On Last Page (Disabled Next)",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(10);

		return (
			<PaginationRoot currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}>
				<PaginationContent>
					<PaginationItem>
						<PaginationFirst>
							<ChevronLeftDouble />
						</PaginationFirst>
					</PaginationItem>
					<PaginationItem>
						<PaginationPrevious>
							<ChevronLeft />
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={1} />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis>
							<DotsHorizontal />
						</PaginationEllipsis>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={8} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={9} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={10} />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext>
							<ChevronRight />
						</PaginationNext>
					</PaginationItem>
					<PaginationItem>
						<PaginationLast>
							<ChevronRightDouble />
						</PaginationLast>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		);
	}
};

export const SimplifiedNavigation: Story = {
	name: "Simplified (Prev/Next Only)",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(3);

		return (
			<div className="space-y-4">
				<p className="text-text-sm text-theme-text-secondary">
					Page {currentPage} of 10
				</p>
				<PaginationRoot currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious>
								<ChevronLeft />
							</PaginationPrevious>
						</PaginationItem>
						<PaginationItem>
							<div className="flex h-9 items-center px-3 text-text-sm">
								Page {currentPage} of 10
							</div>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext>
								<ChevronRight />
							</PaginationNext>
						</PaginationItem>
					</PaginationContent>
				</PaginationRoot>
			</div>
		);
	}
};

export const WithCustomStyling: Story = {
	name: "With Custom Styling",
	render: () => {
		const [currentPage, setCurrentPage] = React.useState(5);

		return (
			<PaginationRoot currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage}>
				<PaginationContent className="gap-2">
					<PaginationItem>
						<PaginationFirst className="rounded-md">
							<ChevronLeftDouble />
						</PaginationFirst>
					</PaginationItem>
					<PaginationItem>
						<PaginationPrevious className="rounded-md">
							<ChevronLeft />
						</PaginationPrevious>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={1} className="rounded-md" />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis className="rounded-md">
							<DotsHorizontal />
						</PaginationEllipsis>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={4} className="rounded-md" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={5} className="rounded-md" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={6} className="rounded-md" />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis className="rounded-md">
							<DotsHorizontal />
						</PaginationEllipsis>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink page={10} className="rounded-md" />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext className="rounded-md">
							<ChevronRight />
						</PaginationNext>
					</PaginationItem>
					<PaginationItem>
						<PaginationLast className="rounded-md">
							<ChevronRightDouble />
						</PaginationLast>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		);
	}
};