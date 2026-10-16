import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";


export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await prisma.siteContent.findMany({ orderBy: { key: "asc" } }));
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const key = String(body.key ?? "").trim();
    const value = String(body.value ?? "");
    if (!key) return NextResponse.json({ error: "Content key is required." }, { status: 400 });

    const item = await prisma.siteContent.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Content could not be saved." }, { status: 400 });
  }
}
