import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    const chatCreated = await prisma.chat.create({
        data: {
            message: body.message
        },
    });

    return NextResponse.json({ chatCreated });
}

export async function GET(request: NextRequest) {
    const chats = await prisma.chat.findMany({
        orderBy: {
            id: "desc"
        }
    });

    return NextResponse.json({ chats });
}
