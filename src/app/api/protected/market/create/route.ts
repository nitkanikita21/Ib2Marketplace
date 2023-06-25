import { prisma } from "@/nextAuth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    
    const market = await prisma.market.create({
        data: {
            description: data.description,
            name: data.name,
            creatorId: data.creatorId,
            cityId: data.cityId
        }
    });
}