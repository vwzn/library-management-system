// src/app/api/loans/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { addDays } from "date-fns";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const loans = await prisma.loan.findMany({
            include: {
                book: true,
                member: true,
            },
        });
        return NextResponse.json(loans);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch loans" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Create loan
        const newLoan = await prisma.loan.create({
            data: {
                bookId: data.bookId,
                memberId: data.memberId,
                loanDate: new Date(),
                dueDate: addDays(new Date(), 14), // 14 days from now
                status: "ACTIVE",
            },
            include: {
                book: true,
                member: true,
            },
        });

        // Update book status
        await prisma.book.update({
            where: { id: data.bookId },
            data: { status: "BORROWED" },
        });

        return NextResponse.json(newLoan, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create loan" },
            { status: 500 }
        );
    }
}
