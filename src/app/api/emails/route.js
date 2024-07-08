import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
    try {
        const results = await conn.query('SELECT * FROM email');
        await conn.end(); // Asegúrate de cerrar la conexión
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    const { name, description, email, phone } = await request.json();

    try {
        const result = await conn.query('INSERT INTO email SET ?', {
            name,
            description,
            email,
            phone
        });
        await conn.end(); // Asegúrate de cerrar la conexión

        return NextResponse.json({
            name, 
            description,
            email,
            phone,
            id: result.insertId
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
