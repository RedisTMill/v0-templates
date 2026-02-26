import { createClient } from "redis";

const globalForRedis = globalThis as unknown as { client?: ReturnType<typeof createClient> };

export const redis =
  globalForRedis.client ??
  createClient({
    url: process.env.REDIS_URL,
  });

if (!globalForRedis.client) {
  globalForRedis.client = redis;
}

export async function getRedis() {
  if (!redis.isOpen) {
    await redis.connect();
  }
  return redis;
}
