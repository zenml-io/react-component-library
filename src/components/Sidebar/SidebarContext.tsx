import React, {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useCallback,
	useContext,
	useState
} from "react";

import { Setter, getValueFromSetter } from "../../utilities";

type SidebarContextProps = {
	isOpen: boolean;
	isClosing: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarProvider({
	children,
	initialOpen = false
}: PropsWithChildren<{ initialOpen?: boolean }>) {
	const [isOpen, _setIsOpen] = useState(initialOpen);
	const [isClosing, setIsClosing] = useState(false);

	/**
	 * wrapper around `_setIsOpen`, to control `isClosing`.
	 * we should instead have a single "status" variable, but refactoring might suck..
	 *
	 * the purpose of `isClosing` is single:
	 * when sidebar is opened, and user hovers over it and clicks the button to close it,
	 * then the sidebar gets automatically closed, instead of waiting for the user
	 * to hover away from it before closing.
	 */
	const setIsOpen = useCallback((newValue: Setter<boolean>): void => {
		_setIsOpen((currIsOpen) => {
			const value: boolean = getValueFromSetter(newValue, currIsOpen);

			if (value === false) {
				setIsClosing(true);
				setTimeout(() => setIsClosing(false), 300);
			}

			return value;
		});
	}, []);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen, isClosing }}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebarContext() {
	const context = useContext(SidebarContext);
	if (!context) throw new Error("useSidebarContext must be used within a SidebarProvider");
	return context;
}
