"use client";

import { Tenant } from "@/types/tenants";
import Button from "../button/Button";
import { AlertDialogDescription, AlertDialogTitle, AlertDialogContent } from "./AlertDialog";
import { Action, Cancel } from "@radix-ui/react-alert-dialog";
import { apiRoutes, getAPIURL } from "@/data/api";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from "react";
import { routes } from "@/routes";

type ResumeDialogProps = {
	id: Tenant["id"];
};

const ResumeDialog = forwardRef<
	ElementRef<typeof AlertDialogContent>,
	ComponentPropsWithoutRef<typeof AlertDialogContent> & ResumeDialogProps
>(({ id }, ref) => {
	const [submitted, setSubmitted] = useState(false);
	const router = useRouter();
	async function deployTenant() {
		setSubmitted(true);
		const res = await fetch(getAPIURL(apiRoutes.tenants.deploy(id)), {
			method: "PATCH",
			credentials: "include",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (res.status === 401) router.push(routes.login);
		const data: Tenant = await res.json();
		setSubmitted(false);
		router.push(`/tenants/${data.id}`);
		router.refresh();
	}

	return (
		<AlertDialogContent ref={ref}>
			<AlertDialogTitle>Resume Tenant?</AlertDialogTitle>
			<AlertDialogDescription className="mb-4">
				This action will resume your tenant
			</AlertDialogDescription>
			<div className="flex justify-end gap-3">
				<Cancel asChild>
					<Button variant="secondary">Cancel</Button>
				</Cancel>
				<Action asChild>
					<Button disabled={submitted} onClick={() => deployTenant()} variant="primary">
						Resume Tenant
					</Button>
				</Action>
			</div>
		</AlertDialogContent>
	);
});

ResumeDialog.displayName = "ResumeDialog";

export default ResumeDialog;
