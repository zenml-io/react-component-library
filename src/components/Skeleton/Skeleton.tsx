import { cn } from "../../utilities";
import React from "react";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("animate-pulse rounded-md bg-neutral-200", className)} {...props} />;
}

export { Skeleton };
