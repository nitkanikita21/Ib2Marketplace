"use client";

import AuthContainer from "@/components/auth/AuthContainer";
import SessionRefreshing from "@/components/auth/SessionRefreshing";
import NavbarLayout from "@/components/layout/Navbar";
import { darkTheme, useThemeStore } from "@/components/theme";
import { Container, CssBaseline, NextUIProvider, useTheme } from "@nextui-org/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const themeStore = useThemeStore();
	const th = useTheme();


	return <html lang="en">
		<body>
			<NextUIProvider theme={themeStore.darkTheme ? darkTheme : th.theme}>
				<AuthContainer>
					<SessionRefreshing>
						{children}
					</SessionRefreshing>
				</AuthContainer>
			</NextUIProvider>
		</body>
	</html>;
}