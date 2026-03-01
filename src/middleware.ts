import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.delete("X-Frame-Options");
  response.headers.set("Content-Security-Policy", "frame-ancestors *");
  return response;
}
