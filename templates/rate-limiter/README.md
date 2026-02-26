# v0 Redis Rate Limiter (minimal)

A tiny Redis + Next.js template for fixed-window rate limiting.

## What it does

- `GET /api/rate-limit` limits requests by client IP.
- Uses Redis `INCR` + `EXPIRE`.
- Returns `429` when the limit is exceeded.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Then call:

```bash
curl -i http://localhost:3000/api/rate-limit
```

## Environment variables

- `REDIS_URL` (required)
- `RATE_LIMIT_WINDOW_SECONDS` (default: `60`)
- `RATE_LIMIT_MAX_REQUESTS` (default: `10`)

## Files

- `src/lib/redis.ts` — Redis client helper.
- `src/lib/rate-limit.ts` — fixed-window limiter logic.
- `src/app/api/rate-limit/route.ts` — API endpoint.
- `src/app/api/health/route.ts` — simple Redis ping health check.
