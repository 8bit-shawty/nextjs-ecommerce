import { NextResponse } from "next/server";

export async function POST() {
  return new NextResponse("Logged out", {
    status: 401, // Force re-authentication
    headers: { "WWW-Authenticate": "Basic" },
  });
}