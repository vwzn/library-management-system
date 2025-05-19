// src/app/api/members/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const members = await prisma.member.findMany();
        return NextResponse.json(members);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch members" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newMember = await prisma.member.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
        });
        return NextResponse.json(newMember, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create member" },
            { status: 500 }
        );
    }
}
