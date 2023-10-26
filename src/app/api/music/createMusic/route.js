import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
    const body=await req.json()
    try {
        const newMusic = await prisma.Music.create({
            musicName:body.musicName,
            categoryName:body.category,
            artistIds:body.id,
            musicImage:body.image,
            audioUrl:body.audio,
            endTime:body.endTime
        })
        return NextResponse.json(newMusic,{status:201})
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" },{status:500}) 
    }
}


