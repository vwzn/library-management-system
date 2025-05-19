// src/app/api/books/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const books = await prisma.book.findMany();
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch books" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newBook = await prisma.book.create({
            data: {
                code: data.code,
                title: data.title,
                author: data.author,
                year: parseInt(data.year),
                type: data.type,
                status: "AVAILABLE",
            },
        });
        return NextResponse.json(newBook, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create book" },
            { status: 500 }
        );
    }
}
