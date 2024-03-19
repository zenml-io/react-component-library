import React from "react";
export default function CPU({ className = "" }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			className={className}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
			<path d="M9 9h6v6h-6z"></path>
			<path d="M3 10h2"></path>
			<path d="M3 14h2"></path>
			<path d="M10 3v2"></path>
			<path d="M14 3v2"></path>
			<path d="M21 10h-2"></path>
			<path d="M21 14h-2"></path>
			<path d="M14 21v-2"></path>
			<path d="M10 21v-2"></path>
		</svg>
	);
}
