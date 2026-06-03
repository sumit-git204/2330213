// Simple in-memory cache (replace with Redis in production)
const cache = new Map();
const TTL_MS = 60 * 1000; // 1 minute default

const set = (key, value, ttl = TTL_MS) => {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttl,
  });
};

const get = (key) => {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.value;
};

const del = (key) => cache.delete(key);

module.exports = { set, get, del };
