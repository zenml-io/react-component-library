import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../utilities";

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				"aspect-square h-3 w-3 bg-theme-surface-primary rounded-rounded border border-theme-border-bold text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:data-[state=unchecked]:opacity-30 disabled:data-[state=checked]:bg-neutral-300",
				className
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex text-theme-surface-strong items-center justify-center data-[state=checked]:data-[disabled]:text-theme-surface-primary">
				<svg
					className="h-[10px] w-[10px] fill-current text-current"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="50" cy="50" r="50" />
				</svg>
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
