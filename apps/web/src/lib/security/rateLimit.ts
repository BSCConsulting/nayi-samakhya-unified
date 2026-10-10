type RateLimitRecord = { count: number; resetAt: number };
const memoryStore = new Map<string, RateLimitRecord>();

export interface RateLimitOptions {
  intervalMs: number;
  maxRequests: number;
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { intervalMs: 300_000, maxRequests: 5 }
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const record = memoryStore.get(identifier);

  if (!record || now > record.resetAt) {
    memoryStore.set(identifier, {
      count: 1,
      resetAt: now + options.intervalMs,
    });
    return { allowed: true, remaining: options.maxRequests - 1, retryAfterSeconds: 0 };
  }

  if (record.count >= options.maxRequests) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: options.maxRequests - record.count,
    retryAfterSeconds: 0,
  };
}

// Garbage collection sweeper every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of memoryStore.entries()) {
      if (now > record.resetAt) memoryStore.delete(key);
    }
  }, 300_000);
}
