"use client";

import NavbarLayout from "@/components/layout/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = useSession();
    const router = useRouter();

    if (session.status == "authenticated") {
        if (session.data.user?.role != "admin") {
            router.push("/");
        }
    } /* else if(session.status == "unauthenticated"){
        router.push("/");
    } */

    return <>{children}</>;
}