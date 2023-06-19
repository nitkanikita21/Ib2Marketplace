"use client";

import AuthContainer from "@/components/AuthContainer";
import NavbarLayout from "@/components/layout/Navbar";
import { darkTheme, useThemeStore } from "@/components/theme";
import { Container, NextUIProvider, useTheme } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const themeStore = useThemeStore()
    const th = useTheme()

    return <html lang="en">
        <body>
            <NextUIProvider theme={themeStore.darkTheme ? darkTheme : th.theme}>
                <AuthContainer>
                    {children}
                </AuthContainer>
            </NextUIProvider>
        </body>
    </html>
}