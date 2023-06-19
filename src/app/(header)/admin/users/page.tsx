"use client";

import { get } from '@/hooks/fetchers';
import { useSession } from 'next-auth/react';
import useSWR from 'swr'


export default function AdminUsersPage() {
    const session = useSession()
    if (session.status != "authenticated") return <></>
    const users = useSWR("/protected/admin/users", get)

    if(users.isLoading)return <></>

    console.log(users.data)

    return <>
        {users.data.map((e: any, i: number) => {
            return <div key={i}>{e.name}</div>
        })}
    </>
}