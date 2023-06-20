import { SessionProvider } from "next-auth/react";
import React from "react";

export default function AuthContainer({ children }: {
    children: React.ReactNode
}) {
	return <div>
		<SessionProvider
			// Re-fetch session every 5 minutes
			refetchInterval={2}
			// Re-fetches session when window is focused
			refetchOnWindowFocus={true}
		>
			{children}
		</SessionProvider>
	</div>;
}