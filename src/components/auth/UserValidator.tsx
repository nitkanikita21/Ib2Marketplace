"use client";

import { useReactiveUser, useReactiveUserStatus } from "@/hooks/user";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

export default function UserValidator({ children, session }: {children: React.ReactNode, session: Session}) {

	const user = useReactiveUserStatus(session.user.id);

	useEffect(() => {
        console.log("UserValidator hook user object: ", user);
		if (user.isError || user.isLoading) return;
		if (!user.data.valid) {
			signOut();
		}
	}, [user]);

    if (user.isError || user.isLoading) return <></>;

	return <>
		{user.data.valid ? children : <></>}
	</>;
}