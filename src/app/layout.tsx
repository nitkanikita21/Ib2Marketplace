"use client";

import AuthContainer from "@/components/auth/AuthContainer";
import SessionUpdater from "@/components/auth/SessionUpdater";
import NavbarLayout from "@/components/layout/Navbar";
import { darkTheme, lightTime, useThemeStore } from "@/theme";
import { Container, CssBaseline, NextUIProvider, useTheme } from "@nextui-org/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const themeStore = useThemeStore();
	const th = useTheme();

	return <html lang="en">
		<body>
			<NextUIProvider theme={themeStore.darkTheme ? darkTheme : lightTime}>
				<AuthContainer>
					<SessionUpdater>
						{children}
					</SessionUpdater>
				</AuthContainer>
			</NextUIProvider>
		</body>
	</html>;
}