// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Seed books
    await prisma.book.createMany({
        data: [
            {
                code: "F001",
                title: "Harry Potter",
                author: "J.K. Rowling",
                year: 1997,
                type: "FICTION",
                status: "AVAILABLE",
            },
            {
                code: "NF001",
                title: "Sapiens",
                author: "Noah Harari",
                year: 2011,
                type: "NON_FICTION",
                status: "AVAILABLE",
            },
        ],
        skipDuplicates: true,
    });

    // Seed members
    await prisma.member.createMany({
        data: [
            {
                name: "John Doe",
                email: "john@example.com",
                phone: "08123456789",
            },
            {
                name: "Jane Smith",
                email: "jane@example.com",
                phone: "08234567890",
            },
        ],
        skipDuplicates: true,
    });

    console.log("Database seeded successfully");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
