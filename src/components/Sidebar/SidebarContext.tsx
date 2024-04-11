import React, {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState
} from "react";

type SidebarContextProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarProvider({
	children,
	initialOpen = false
}: PropsWithChildren<{ initialOpen?: boolean }>) {
	const [isOpen, setIsOpen] = useState(initialOpen);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
	);
}

export function useSidebarContext() {
	const context = useContext(SidebarContext);
	if (!context) throw new Error("useSidebarContext must be used within a SidebarProvider");
	return context;
}
