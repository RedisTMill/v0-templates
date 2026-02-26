import { NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

export async function GET() {
  const client = await getRedis();
  const pong = await client.ping();

  return NextResponse.json({ status: "ok", redis: pong });
}
