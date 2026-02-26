# v0-templates

v0 templates for Redis.

## Redis template roadmap (re-sequenced)

This repo is the main planning hub for a family of Redis-focused v0 templates. We will prioritize templates in three phases so we can deliver practical building blocks first, then expand into AI/data-heavy patterns, then domain-specialized workflows.

### Phase 1 — Foundation templates (build first)

1. **Rate Limiting**
2. **Session Store**
3. **Leaderboard**
4. **Cache Aside**

### Phase 2 — Data and AI acceleration templates

5. **Semantic Caching**
6. **Feature Store**
7. **Time-series**

### Phase 3 — Domain and workflow templates

8. **Recommendation engine**
9. **Location-based search**
10. **Job Queue**
11. **Matchmaking** (e.g., pairing users in games)
12. **Prefetch cache**

## Ideal base template (to reuse for all 12 repos)

Yes — this is the baseline template contract we can use immediately and apply across every Redis template repo.

### Required repository structure

- `README.md`
- `.env.example`
- `package.json`
- `src/`
- `src/app/api/health/route.ts`
- `src/lib/redis.ts`
- `src/lib/schema.ts` (key naming + data model definitions)
- `scripts/seed.ts`
- `scripts/demo.ts`

### Required README sections

Each template README should include:

1. Problem solved
2. Architecture and request flow
3. Redis key schema and data structures
4. Local development and run commands
5. Deployment notes
6. Scaling and failure considerations

### Redis conventions (shared)

- `REDIS_URL` as the primary environment variable.
- Prefix keys with template domain (`rate_limit:*`, `session:*`, `leaderboard:*`, etc.).
- Add TTL guidance for all ephemeral keys.
- Expose a simple health endpoint that checks Redis connectivity.

### API and code expectations

- One write path and one read path per template.
- Deterministic key naming helper utilities.
- Minimal validation for request payloads.
- Seed script with small demo dataset.
- Demo script that exercises the core flow end-to-end.

## Planned template repo naming

- `v0-redis-rate-limiter`
- `v0-redis-session-store`
- `v0-redis-leaderboard`
- `v0-redis-cache-aside`
- `v0-redis-semantic-cache`
- `v0-redis-feature-store`
- `v0-redis-time-series`
- `v0-redis-recommendation-engine`
- `v0-redis-location-search`
- `v0-redis-job-queue`
- `v0-redis-matchmaking`
- `v0-redis-prefetch-cache`

## Redis skill input

Using `https://skills.sh/redis/agent-skills/redis-development` is a good idea.

In this environment, direct install from that URL (and GitHub fallback) is blocked by network proxy `403`, so I could not fetch it automatically right now. Once reachable, we can adopt that skill as the canonical implementation reference and map each template to this contract.
## Next step

When you share the existing Redis-based v0 template example, we can convert this roadmap into a concrete template contract and scaffold each repo from that standard.
