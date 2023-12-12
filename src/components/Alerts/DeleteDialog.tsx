"use client";

import { Tenant } from "@/types/tenants";
import Button from "../button/Button";
import { AlertDialogDescription, AlertDialogTitle, AlertDialogContent } from "./AlertDialog";
import { Action, Cancel } from "@radix-ui/react-alert-dialog";
import { apiRoutes, getAPIURL } from "@/data/api";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from "react";
import { routes } from "@/routes";
import { Input } from "../input/Input";

type DeleteDialogProps = {
	id: Tenant["id"];
};

const DeleteDialog = forwardRef<
	ElementRef<typeof AlertDialogContent>,
	ComponentPropsWithoutRef<typeof AlertDialogContent> & DeleteDialogProps
>(({ id }, ref) => {
	const [confirmText, setConfirmText] = useState("");
	const router = useRouter();
	async function deleteTenant() {
		const res = await fetch(getAPIURL(apiRoutes.tenants.detail(id)), {
			method: "DELETE",
			credentials: "include",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (res.status === 401) router.push(routes.login);
		router.refresh();
	}

	return (
		<AlertDialogContent className="p-0" ref={ref}>
			<AlertDialogTitle className="py-2 pl-5 pr-3 text-text-lg font-semibold">
				Delete Tenant
			</AlertDialogTitle>
			<div className="border-y border-theme-border-moderate px-5 py-5">
				<AlertDialogDescription className="mb-4">
					Are you sure? <br />
					This action cannot be undone and will remove all your tenant data.
				</AlertDialogDescription>
				<p className="mb-0.5 text-text-sm">
					Please type <span className="font-semibold">DELETE</span> to confirm
				</p>
				<Input
					className="w-full"
					onPaste={(e) => e.preventDefault()}
					inputSize="sm"
					onChange={(e) => setConfirmText(e.target.value)}
				/>
			</div>
			<div className="flex justify-end gap-3 px-5 py-3">
				<Cancel asChild>
					<Button variant="secondary">Cancel</Button>
				</Cancel>
				<Action asChild>
					<Button
						disabled={confirmText !== "DELETE"}
						onClick={() => deleteTenant()}
						variant="danger"
					>
						Delete
					</Button>
				</Action>
			</div>
		</AlertDialogContent>
	);
});

DeleteDialog.displayName = "DeleteDialog";

export default DeleteDialog;
