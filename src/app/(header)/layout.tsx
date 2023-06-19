import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
	return <><NavbarLayout />{children}</>;
}