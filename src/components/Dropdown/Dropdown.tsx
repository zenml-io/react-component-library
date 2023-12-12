import * as React from "react";
import { Slottable } from "@radix-ui/react-slot";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../utilities/index";
import * as RDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(
			"py-1.5 focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 text-text-sm outline-none",
			inset && "pl-8",
			className
		)}
		{...props}
	>
		{children}
		{/* <ChevronRightIcon className="ml-auto h-4 w-4" /> */}
	</DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		className={cn(
			"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-theme-border-bold bg-theme-surface-primary p-1",
			className
		)}
		{...props}
	/>
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-md border border-theme-border-moderate bg-theme-surface-primary p-1",
				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				className
			)}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
		icon?: React.ReactElement;
	}
>(({ className, inset, children, ...props }, ref) => {
	function prepareIcon(icon: React.ReactElement) {
		return React.cloneElement(icon, {
			className: cn("h-3 w-3 mr-2 fill-neutral-400", icon.props.className)
		});
	}

	return (
		<DropdownMenuPrimitive.Item
			ref={ref}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-[4px] px-3 py-2 text-text-sm outline-none transition-colors focus:bg-theme-surface-tertiary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				inset && "pl-8",
				className
			)}
			{...props}
		>
			{props.icon && prepareIcon(props.icon)}
			<Slottable>{children}</Slottable>
		</DropdownMenuPrimitive.Item>
	);
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			"focus:text-accent-foreground focus:bg-theme-surface-teritary relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		checked={checked}
		{...props}
	>
		<span className="h-3.5 w-3.5 absolute left-2 flex items-center justify-center">
			<DropdownMenuPrimitive.ItemIndicator>
				{/* <CheckIcon className="h-4 w-4" /> */}
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		className={cn(
			"py-1.5 relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-text-sm outline-none transition-colors focus:bg-theme-surface-tertiary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<span className="h-3.5 w-3.5 absolute left-2 flex items-center justify-center">
			<DropdownMenuPrimitive.ItemIndicator>
				{/* <DotFilledIcon className="h-4 w-4 fill-current" /> */}
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		className={cn("py-1.5 px-2 text-text-sm font-semibold", inset && "pl-8", className)}
		{...props}
	/>
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-[1px] bg-primary-500", className)}
		{...props}
	/>
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span className={cn("text-xs ml-auto tracking-widest opacity-60", className)} {...props} />
	);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

type DialogItemProps = {
	triggerChildren: React.ReactNode;
	icon?: React.ReactElement;
	children: React.ReactNode;
	onSelect?: () => void;
	onOpenChange?: (isOpen: boolean) => void;
	// Add other props with their respective types if needed.
};

const DialogItem = forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, DialogItemProps>(
	(props, forwardedRef) => {
		const { triggerChildren, children, onSelect, onOpenChange, icon, ...itemProps } = props;
		return (
			<RDialog.Root onOpenChange={onOpenChange}>
				<RDialog.Trigger asChild>
					<DropdownMenuItem
						{...itemProps}
						className="hover:cursor-pointer"
						icon={props.icon}
						ref={forwardedRef}
						onSelect={(event) => {
							event.preventDefault();
							onSelect && onSelect();
						}}
					>
						{triggerChildren}
					</DropdownMenuItem>
				</RDialog.Trigger>
				<RDialog.Portal>
					{/* <RDialog.Overlay className="fixed inset-0 bg-neutral-900/20" /> */}
					{children}
				</RDialog.Portal>
			</RDialog.Root>
		);
	}
);

DialogItem.displayName = "DialogItem";

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
	DialogItem
};
