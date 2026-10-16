import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";


export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const projects = await prisma.project.findMany({ orderBy: { updatedAt: "desc" } });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const title = String(body.title ?? "").trim();
    const url = String(body.url ?? "").trim();

    if (!title || !url || !/^https?:\/\//i.test(url)) {
      return NextResponse.json({ error: "Valid title and HTTP(S) URL are required." }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title,
        url,
        description: String(body.description ?? ""),
        technology: String(body.technology ?? ""),
        category: String(body.category ?? "GitHub Projects"),
        published: body.published !== false,
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save project." }, { status: 500 });
  }
}
