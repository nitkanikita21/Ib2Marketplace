"use client";

import { useUserValidatorStore } from "@/hooks/user";
import { Container, Loading } from "@nextui-org/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

export default function UserValidator({ children, session, status }: { children: React.ReactNode, session: Session, status: "authenticated" | "loading" | "unauthenticated" }) {

    const validator = useUserValidatorStore();


    /* useEffect(() => {
        setInterval(() => {
            console.log("UserValidator validating");
            validator.validate();
            validator.setId(session.user.id);
        }, 500);
    }, []), */

        /* useEffect(() => {
            console.log("UserValidator isValid state: ", validator.isValid);
            console.log("UserValidator allow signout: ", !validator.isValid && status == "authenticated");
            setTimeout(() => {
                if (!validator.isValid && status == "authenticated") {
                    signOut();
                }
            }, 15000);
        }, [validator.isValid]);
 */
    if (!validator.isValid) return <>
        <Container display="flex" alignContent="center" justify="center">
            <Loading>
                Валідація акаунту...
            </Loading>
        </Container>
    </>;

    return <>
        {children}
    </>;
}