import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.resolve(__dirname, "..");
const nextDir = path.join(webDir, ".next");
const serverApp = path.join(nextDir, "server", "app");
const staticDir = path.join(nextDir, "static");
const publicDir = path.join(webDir, "public");

console.log("Preparing .next output directory for Cloudflare Pages...");

// 1. Copy server/app HTML and assets into .next root
if (fs.existsSync(serverApp)) {
  fs.cpSync(serverApp, nextDir, { recursive: true });
  console.log("Copied prerendered pages from server/app to .next root.");
}

// 2. Map 404 page for Cloudflare Pages
const notFoundHtml = path.join(nextDir, "_not-found.html");
const notFoundTarget = path.join(nextDir, "404.html");
if (fs.existsSync(notFoundHtml)) {
  fs.copyFileSync(notFoundHtml, notFoundTarget);
  console.log("Mapped _not-found.html to 404.html.");
}

// 3. Ensure .next/_next/static exists so Next.js JS/CSS chunks resolve
const nextStaticDir = path.join(nextDir, "_next", "static");
fs.mkdirSync(path.join(nextDir, "_next"), { recursive: true });
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, nextStaticDir, { recursive: true });
  console.log("Mapped static assets to _next/static.");
}

// 4. Copy public folder assets (favicons, images, manifest) into .next root
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, nextDir, { recursive: true });
  console.log("Copied public assets to .next root.");
}

// 5. Clean up large caches to guarantee < 25 MiB compliance
for (const dirToClean of [path.join(nextDir, "cache"), path.join(nextDir, "dev")]) {
  if (fs.existsSync(dirToClean)) {
    fs.rmSync(dirToClean, { recursive: true, force: true });
  }
}

console.log("Cloudflare Pages preparation completed successfully.");
