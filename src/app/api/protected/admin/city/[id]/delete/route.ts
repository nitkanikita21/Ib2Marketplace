import { prisma } from "@/nextAuth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
	const city = await prisma.city.delete({
		"where": {
			"id": params.id
		}
	});

	return NextResponse.json(city);
}