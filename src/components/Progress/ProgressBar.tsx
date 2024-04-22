import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "../../utilities";

const ProgressBar = forwardRef<
	ElementRef<typeof ProgressPrimitive.Root>,
	ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn("rounded-full relative h-4 w-full overflow-hidden bg-primary-50", className)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-full w-full flex-1 bg-primary-400 transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</ProgressPrimitive.Root>
));
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar };
