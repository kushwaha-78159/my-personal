import { NextResponse } from "next/server";
import { createAdminSession } from "@/lib/admin-auth";
import { timingSafeEqual } from "node:crypto";


function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export async function POST(request: Request) {
  try {
    const expectedEmail = process.env.ADMIN_EMAIL;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedEmail || !expectedPassword) {
      return NextResponse.json(
        { error: "Admin credentials are not configured on the server." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const email = String(body.email ?? "");
    const password = String(body.password ?? "");

    if (
      !safeEqual(email.toLowerCase(), expectedEmail.toLowerCase()) ||
      !safeEqual(password, expectedPassword)
    ) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    await createAdminSession();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Login could not be completed." }, { status: 500 });
  }
}
