import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, {params}){
    try {
        const thisEmail = await conn.query("SELECT * FROM email WHERE email_id = ?",[ 
            params.id,
        ]);
        if (thisEmail.length === 0) {
            return NextResponse.json(
                {message: "Producto no encontrado"},
                {status: 404}
            )
        }
        return NextResponse.json(thisEmail[0]);
    } catch (error) {
        return NextResponse.json(
            {mesage: error.mesage},
            {status: 500}
        )
    }
}

export async function DELETE(request, {params}){

    try {
        const thisEmail = await conn.query('DELETE FROM email WHERE email_id = ?', [
        params.id
    ]);
    if (thisEmail.affectedRows === 0) {
            return NextResponse.json(
                {message: "Producto no encontrado"},
                {status:404}
            )
    }

        return new Response({message: "Eliminando producto"},{status:204})
    } catch (error) {
        return NextResponse.json({message: error}, {status:500})
    }
    
}

export async function PUT(request, {params}){

    try {
        const data = await request.json()
        const thisEmail = await conn.query('UPDATE email SET ? WHERE email_id  = ?', [data, params.id])

        if (thisEmail.affectedRows === 0) {
            return NextResponse.json({message: "Producto no encontrado"}, {status:404})
        }

        const updatedEmail = await conn.query("SELECT * FROM email WHERE email_id = ? ", [params.id])

        return NextResponse.json(updatedEmail[0])
    } catch (error) {
        return NextResponse.json({message: error.mesage}, {status:500})
    }

}
