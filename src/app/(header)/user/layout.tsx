"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {


	return <>{children}</>;
}