import { getRedis } from "./redis";

const WINDOW_SECONDS = Number(process.env.RATE_LIMIT_WINDOW_SECONDS ?? 60);
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS ?? 10);

export async function checkRateLimit(subject: string) {
  const key = `rate_limit:${subject}`;
  const client = await getRedis();

  const count = await client.incr(key);
  if (count === 1) {
    await client.expire(key, WINDOW_SECONDS);
  }

  const ttl = await client.ttl(key);

  return {
    allowed: count <= MAX_REQUESTS,
    limit: MAX_REQUESTS,
    remaining: Math.max(0, MAX_REQUESTS - count),
    resetInSeconds: Math.max(ttl, 0),
  };
}
