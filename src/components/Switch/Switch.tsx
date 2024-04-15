import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../../utilities";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & { half?: boolean }
>(({ className, half, ...props }, ref) => (
	<SwitchPrimitives.Root
		data-half={half}
		className={cn(
			"peer inline-flex h-4 w-[36px] shrink-0 cursor-pointer items-center rounded-rounded border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed data-[state=checked]:disabled:bg-primary-400/30 data-[state=checked]:data-[half=true]:bg-primary-50 disabled:data-[state=checked]:data-[half=true]:bg-primary-50/30 data-[state=checked]:bg-primary-400 disabled:data-[state=unchecked]:bg-neutral-100/30 data-[state=unchecked]:bg-neutral-100",
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				"pointer-events-none block h-3 w-3 rounded-rounded bg-white shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0"
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
