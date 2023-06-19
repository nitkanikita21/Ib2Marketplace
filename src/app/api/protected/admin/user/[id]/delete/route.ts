import { prisma } from "@/nextAuth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
	const user = await prisma.user.delete({
		"where": {
			"id": params.id
		},
		"include": {
			"Account": true,
			"Session": true
		}
	});

	return NextResponse.json(user);
}