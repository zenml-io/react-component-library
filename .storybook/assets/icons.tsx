import React from "react";
export function CPU({ className = "" }: { className?: string }) {
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

export function CloseButton({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 32 32"
			fill="#6B7280"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7 6C7.55228 6 8 6.44772 8 7V25C8 25.5523 7.55228 26 7 26C6.44772 26 6 25.5523 6 25V7C6 6.44772 6.44772 6 7 6ZM18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L13.4142 15H25C25.5523 15 26 15.4477 26 16C26 16.5523 25.5523 17 25 17H13.4142L18.7071 22.2929C19.0976 22.6834 19.0976 23.3166 18.7071 23.7071C18.3166 24.0976 17.6834 24.0976 17.2929 23.7071L10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"
			/>
		</svg>
	);
}

export function Dots({ className = "" }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
			<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
		</svg>
	);
}
