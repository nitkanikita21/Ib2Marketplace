import { prisma } from "@/nextAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const market = await prisma.market.findUnique({
		"where": {
			"creatorId": params.id
		}
	});


	return NextResponse.json(market);
}