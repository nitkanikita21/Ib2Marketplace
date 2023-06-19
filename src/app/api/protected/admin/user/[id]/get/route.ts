import { prisma } from "@/nextAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const user = await prisma.user.findUnique({
		"where": {
			"id": params.id
		}
	});

	return NextResponse.json(user);
}