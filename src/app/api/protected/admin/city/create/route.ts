import { prisma } from "@/nextAuth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const city = await prisma.city.create({ "data": await request.json() });
	console.log("CITY", city);

	return NextResponse.json(city);
}
