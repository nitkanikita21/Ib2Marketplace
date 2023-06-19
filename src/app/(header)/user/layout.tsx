"use client"

import { useSession } from "next-auth/react"

export default function UserLayout({ children }: { children: React.ReactNode }) {

    
    return <>{children}</>
}