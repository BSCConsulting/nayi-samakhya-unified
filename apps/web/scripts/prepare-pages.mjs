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

// 6. Clean up server, cache, dev, and internal build artifacts to guarantee strict < 20,000 file limit and < 25 MiB compliance on Cloudflare Pages
const dirsToRemove = [
  path.join(nextDir, "server"),
  path.join(nextDir, "cache"),
  path.join(nextDir, "dev"),
  path.join(nextDir, "types"),
];

for (const dirToClean of dirsToRemove) {
  if (fs.existsSync(dirToClean)) {
    fs.rmSync(dirToClean, { recursive: true, force: true });
    console.log(`Cleaned build directory: ${path.basename(dirToClean)}`);
  }
}

// Clean up .segments folders generated during App Router compilation
function cleanSegments(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.endsWith(".segments")) {
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        cleanSegments(fullPath);
      }
    }
  }
}
cleanSegments(nextDir);

// 7. Rigorous Cloudflare Pages Pre-Flight Verification & Guardrails
function auditDirectory(dir) {
  let fileCount = 0;
  let maxFileSize = 0;
  let maxFile = "";

  function traverse(currentDir) {
    if (!fs.existsSync(currentDir)) return;
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile()) {
        fileCount++;
        const stat = fs.statSync(fullPath);
        if (stat.size > maxFileSize) {
          maxFileSize = stat.size;
          maxFile = fullPath;
        }
      }
    }
  }

  traverse(dir);
  return { fileCount, maxFileSize, maxFile };
}

const audit = auditDirectory(nextDir);
const maxFileMb = (audit.maxFileSize / (1024 * 1024)).toFixed(2);
console.log(`\n========================================`);
console.log(`Cloudflare Pages Pre-Flight Health Audit`);
console.log(`========================================`);
console.log(`Total Published Files : ${audit.fileCount} / 20,000 max (${((audit.fileCount / 20000) * 100).toFixed(1)}% of limit)`);
console.log(`Largest Asset File    : ${path.basename(audit.maxFile)} (${maxFileMb} MiB / 25 MiB max)`);

if (audit.fileCount >= 18000) {
  throw new Error(`CRITICAL GUARDRAIL VIOLATION: Output file count (${audit.fileCount}) approaches or exceeds Cloudflare 20,000 file limit!`);
}

if (audit.maxFileSize > 25 * 1024 * 1024) {
  throw new Error(`CRITICAL GUARDRAIL VIOLATION: Asset ${audit.maxFile} (${maxFileMb} MiB) exceeds Cloudflare 25 MiB file size limit!`);
}

// Check critical routes
const criticalRoutes = [
  "index.html",
  "representation/index.html",
  "feed/index.html",
  "survey/index.html",
  "grievance/index.html",
  "mandals/index.html",
  "districts/index.html",
  "welfare/salon-schemes/index.html",
  "matrimony/index.html",
  "matrimony/kalyana-lakshmi/index.html",
  "sprint/index.html",
  "quiz/index.html",
  "reels/index.html",
  "twa/index.html",
  "poster/index.html",
  "coordinator-card/index.html",
  "salon-hub/index.html",
  "history/index.html",
  "404.html",
];

const missingRoutes = [];
for (const r of criticalRoutes) {
  if (!fs.existsSync(path.join(nextDir, r))) {
    missingRoutes.push(r);
  }
}

if (missingRoutes.length > 0) {
  console.error("Missing critical routes in .next output:", missingRoutes);
  throw new Error(`CRITICAL GUARDRAIL VIOLATION: ${missingRoutes.length} critical route(s) failed to generate: ${missingRoutes.join(", ")}`);
}

console.log(`Verified ${criticalRoutes.length} critical public routes are 100% present in static export.`);
console.log(`========================================\n`);

console.log("Cloudflare Pages preparation completed successfully.");

