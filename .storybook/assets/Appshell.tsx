import React, { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
	return (
		<div style={{ minHeight: "1000px", display: "flex", flexDirection: "column", width: "100%" }}>
			<div
				style={{ height: "64px", backgroundColor: "white", borderBottom: "solid lightgrey 1px" }}
			></div>
			{children}
		</div>
	);
}
