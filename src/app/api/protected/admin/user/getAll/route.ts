import { prisma } from "@/nextAuth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const users = await prisma.user.findMany({
		"include": {
			"city": true
		}
	});

	return NextResponse.json(users);
}