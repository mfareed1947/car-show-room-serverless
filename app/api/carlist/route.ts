// import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { carListTable, db } from "@/lib/drizzle"
import { sql } from "@vercel/postgres"

export async function GET(request: NextRequest) {

    try {
        await sql`CREATE TABLE IF NOT EXISTS carlist(id SERIAL , carname VARCHAR(255),company VARCHAR(255),price VARCHAR(255))`;
        const res = await db.select().from(carListTable)
        return NextResponse.json({ data: res })
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ message: 'check your code' })
    }
    return NextResponse.json({ message: "you call this api" })
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    try {
        if (req.carName && req.company && req.price) {
            const res = await db.insert(carListTable).values({
                carname: req.carName,
                company: req.company,
                price: req.price
            }).returning()
            console.log(res)
            return NextResponse.json({ message: 'Data added successfully' })
        } else {
            throw new Error("task field is required");
        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message })
    }
}