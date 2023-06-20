
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export const config = { "matcher": ["/api/protected/:path*", "/protected/:path*", "/user/:path*", "/admin/"] };


export default async function handler(req: NextRequest) {
	const resSession = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
		"headers": {
			"Content-Type": "application/json",
			"Cookie": req.headers.get("cookie") || ""
		},
		"method": "GET"
	});
	const session = await resSession.json();

	console.log("SESSION: ", session);

	if (!session) {
		return NextResponse.redirect("/signIn");
	}

	return NextResponse.next();
}