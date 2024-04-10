import React from "react";
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport
} from "./Toast";
import { useToast } from "./use-toast";

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, icon, ...props }) {
				return (
					<Toast key={id} {...props}>
						<div className="flex flex-col gap-3">
							<div className="flex gap-2">
								{icon && icon}
								{title && <ToastTitle>{title}</ToastTitle>}
								{description && <ToastDescription>{description}</ToastDescription>}
							</div>

							{action && <div className="ml-auto">{action}</div>}
						</div>
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
