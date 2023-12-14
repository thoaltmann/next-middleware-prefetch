import { NextResponse } from "next/server"
export async function middleware(): Promise<NextResponse | undefined> {
  return NextResponse.next()
}
