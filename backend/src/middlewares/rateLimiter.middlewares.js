import dotenv from "dotenv";
dotenv.config();

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Debugging
console.log("URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log(
  "TOKEN:",
  process.env.UPSTASH_REDIS_REST_TOKEN ? "Loaded" : "Missing"
);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = req.ip;
    const result = await ratelimit.limit(identifier);

    if (!result.success) {
      return res.status(429).json({ message: "Too many requests" });
    }

    next();
  } catch (err) {
    console.error("Rate limit error:", err);
    next(); // fail open
  }
};

export default rateLimiter;
