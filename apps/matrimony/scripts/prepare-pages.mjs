import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const matrimonyDir = path.resolve(__dirname, "..");
const nextDir = path.join(matrimonyDir, ".next");
const serverApp = path.join(nextDir, "server", "app");
const staticDir = path.join(nextDir, "static");
const publicDir = path.join(matrimonyDir, "public");

console.log("Preparing .next output directory for Cloudflare Pages (Matrimony)...");

// Ensure .next/matrimony directory exists for basePath-aware routing
const matrimonySubDir = path.join(nextDir, "matrimony");
fs.mkdirSync(matrimonySubDir, { recursive: true });

// 1. Copy server/app HTML and assets into .next root AND .next/matrimony
if (fs.existsSync(serverApp)) {
  fs.cpSync(serverApp, nextDir, { recursive: true });
  fs.cpSync(serverApp, matrimonySubDir, { recursive: true });
  console.log("Copied prerendered pages to .next root and .next/matrimony.");
}

// 2. Map 404 page for Cloudflare Pages
const notFoundHtml = path.join(nextDir, "_not-found.html");
if (fs.existsSync(notFoundHtml)) {
  fs.copyFileSync(notFoundHtml, path.join(nextDir, "404.html"));
  fs.copyFileSync(notFoundHtml, path.join(matrimonySubDir, "404.html"));
  console.log("Mapped _not-found.html to 404.html.");
}

// 3. Ensure static chunks are mapped under both _next/static and matrimony/_next/static
const nextStaticDir = path.join(nextDir, "_next", "static");
const matrimonyStaticDir = path.join(matrimonySubDir, "_next", "static");
fs.mkdirSync(path.join(nextDir, "_next"), { recursive: true });
fs.mkdirSync(path.join(matrimonySubDir, "_next"), { recursive: true });

if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, nextStaticDir, { recursive: true });
  fs.cpSync(staticDir, matrimonyStaticDir, { recursive: true });
  console.log("Mapped static assets to _next/static and matrimony/_next/static.");
}

// 4. Copy public folder assets
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, nextDir, { recursive: true });
  fs.cpSync(publicDir, matrimonySubDir, { recursive: true });
  console.log("Copied public assets.");
}

// 5. Clean up large caches to guarantee < 25 MiB compliance
for (const dirToClean of [path.join(nextDir, "cache"), path.join(nextDir, "dev")]) {
  if (fs.existsSync(dirToClean)) {
    fs.rmSync(dirToClean, { recursive: true, force: true });
  }
}

console.log("Matrimony Cloudflare Pages preparation completed successfully.");
