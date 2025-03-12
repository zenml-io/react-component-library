import React from "react";

export type SortingArrowIcon = React.FC<{
	className?: string;
}>;

export let ArrowUp: SortingArrowIcon = () => <></>;
export let ArrowDown: SortingArrowIcon = () => <></>;

export function injectSortingArrowIcons(icons: {
	ArrowUp: SortingArrowIcon;
	ArrowDown: SortingArrowIcon;
}) {
	ArrowUp = icons.ArrowUp;
	ArrowDown = icons.ArrowDown;
}
