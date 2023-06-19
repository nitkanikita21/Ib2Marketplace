"use client";

import { Loading } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function SignIn() {
    useEffect(()=>{
        signOut()
    })
    return <>
        <Loading>Очікуємо вихід...</Loading>
    </>
}