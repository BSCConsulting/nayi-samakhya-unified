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

// 4b. Merge built Matrimony Portal assets (if built) into .next/matrimony AND .next/matrimony.html
const matrimonyNext = path.resolve(webDir, "../matrimony/.next");
const matrimonyPublic = path.resolve(webDir, "../matrimony/public");
const matrimonyTargetDir = path.join(nextDir, "matrimony");

if (fs.existsSync(matrimonyNext)) {
  fs.mkdirSync(matrimonyTargetDir, { recursive: true });
  
  // Copy matrimony server/app static HTML
  const matApp = path.join(matrimonyNext, "server", "app");
  if (fs.existsSync(matApp)) {
    fs.cpSync(matApp, matrimonyTargetDir, { recursive: true });
  }

  // Copy matrimony static chunks to .next/matrimony/_next/static
  const matStatic = path.join(matrimonyNext, "static");
  const matStaticTarget = path.join(matrimonyTargetDir, "_next", "static");
  fs.mkdirSync(path.join(matrimonyTargetDir, "_next"), { recursive: true });
  if (fs.existsSync(matStatic)) {
    fs.cpSync(matStatic, matStaticTarget, { recursive: true });
  }

  // Copy matrimony public assets
  if (fs.existsSync(matrimonyPublic)) {
    fs.cpSync(matrimonyPublic, matrimonyTargetDir, { recursive: true });
  }

  // In Cloudflare Pages, requests for /matrimony (no trailing slash) look for .next/matrimony.html or .next/matrimony/index.html.
  // Having both guarantees instant resolution without redirect loops.
  const matIndexHtml = path.join(matrimonyTargetDir, "index.html");
  const matRootHtml = path.join(nextDir, "matrimony.html");
  if (fs.existsSync(matIndexHtml)) {
    fs.copyFileSync(matIndexHtml, matRootHtml);
    console.log("Mapped matrimony/index.html to .next/matrimony.html for zero-redirect resolution.");
  }

  console.log("Merged Matrimony Portal assets into .next/matrimony.");
}

// 5. Cloudflare Pages Clean URL Mirroring:
// Ensure every X.html has a corresponding X/index.html, and every X/index.html has X.html
function mirrorHtmlRoutes(dir, base = "") {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name === "cache" || entry.name === "dev") continue;
      const indexFile = path.join(fullPath, "index.html");
      const siblingHtml = path.join(dir, `${entry.name}.html`);
      if (fs.existsSync(indexFile) && !fs.existsSync(siblingHtml)) {
        fs.copyFileSync(indexFile, siblingHtml);
      }
      mirrorHtmlRoutes(fullPath, path.join(base, entry.name));
    } else if (entry.isFile() && entry.name.endsWith(".html") && entry.name !== "index.html" && entry.name !== "404.html") {
      const routeName = entry.name.slice(0, -5);
      const subDir = path.join(dir, routeName);
      const subIndex = path.join(subDir, "index.html");
      if (!fs.existsSync(subDir)) {
        fs.mkdirSync(subDir, { recursive: true });
      }
      if (!fs.existsSync(subIndex)) {
        fs.copyFileSync(fullPath, subIndex);
      }
    }
  }
}
mirrorHtmlRoutes(nextDir);
console.log("Completed HTML route mirroring for Cloudflare Pages.");

// 6. Clean up large caches to guarantee < 25 MiB compliance
for (const dirToClean of [path.join(nextDir, "cache"), path.join(nextDir, "dev")]) {
  if (fs.existsSync(dirToClean)) {
    fs.rmSync(dirToClean, { recursive: true, force: true });
  }
}

console.log("Cloudflare Pages preparation completed successfully.");
