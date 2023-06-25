
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export const config = { "matcher": ["/api/protected/:path*", "/user/:path*", "/admin/:path*"] };


export default async function handler(req: NextRequest) {
	const resSession = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/session`, {
		"headers": {
			"Content-Type": "application/json",
			"Cookie": req.headers.get("cookie") || ""
		},
		"method": "GET"
	});
	const session = await resSession.json();

	console.log("SESSION AAA: ", session);

	if (session?.user?.role == undefined) {
		console.log("redirect ", session.role);
		return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/signIn`);
	}

	return NextResponse.next();
}