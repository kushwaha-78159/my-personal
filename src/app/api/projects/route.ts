import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { updatedAt: "desc" },
      select: {
        id: true, title: true, description: true,
        technology: true, category: true, url: true,
      },
    });
    return NextResponse.json(projects, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (error) {
    console.error("Public projects API error:", error);
    return NextResponse.json(
      { error: "Projects could not be loaded." },
      { status: 500 }
    );
  }
}
