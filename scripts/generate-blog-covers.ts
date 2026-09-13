/**
 * DEPRECATED — do not run.
 *
 * Blog covers are now unique editorial PNGs in `public/images/blog/{slug}.png`
 * (registered in `lib/blog-covers.ts`). This script regenerates old template SVGs
 * and would fight that workflow.
 *
 *   npx tsx scripts/generate-blog-covers.ts
 */
import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../lib/blog";

type Scene =
  | "compare"
  | "checklist"
  | "code"
  | "api"
  | "mobile"
  | "chart"
  | "cost"
  | "ai"
  | "bug"
  | "gate"
  | "canada"
  | "people"
  | "interview"
  | "shield"
  | "rocket"
  | "search";

type CoverSpec = {
  scene: Scene;
  bg: string;
  ink: string;
  accent: string;
  soft: string;
  hook: string;
  layout: "illustration" | "report";
};

const BRAND = "TestSync Lab";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapLines(text: string, maxLen: number, maxLines: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLen && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    } else {
      current = next;
    }
  }
  if (lines.length < maxLines && current) lines.push(current);
  if (lines.length === maxLines) {
    const used = lines.join(" ").length;
    if (text.length > used + 2) {
      lines[maxLines - 1] = `${lines[maxLines - 1].replace(/\s+\S*$/, "")}…`;
    }
  }
  return lines.slice(0, maxLines);
}

function classify(slug: string, title: string, tags: string[]): CoverSpec {
  const key = `${slug} ${title} ${tags.join(" ")}`.toLowerCase();

  const base = (partial: Partial<CoverSpec> & Pick<CoverSpec, "scene" | "hook">): CoverSpec => ({
    bg: "#0B1F4B",
    ink: "#FFFFFF",
    accent: "#60A5FA",
    soft: "#93C5FD",
    layout: "illustration",
    ...partial,
  });

  if (/(^|[^a-z])(ai|llm|chatbot|prompt)([^a-z]|$)/.test(key)) {
    return base({
      scene: "ai",
      bg: "#1E1B4B",
      accent: "#A5B4FC",
      soft: "#C7D2FE",
      hook: "Test the model and the release path",
      layout: "illustration",
    });
  }
  if (/(checklist|audit|launch)/.test(key)) {
    return base({
      scene: "checklist",
      bg: "#0F766E",
      accent: "#99F6E4",
      soft: "#CCFBF1",
      hook: "Ship with a clear go / no-go list",
      layout: "illustration",
    });
  }
  if (/(cost|price|affordable|cheap|budget|how-much)/.test(key)) {
    return base({
      scene: "cost",
      bg: "#B45309",
      accent: "#FDE68A",
      soft: "#FEF3C7",
      hook: "What you pay vs what bugs cost",
      layout: "illustration",
    });
  }
  if (/(^|[^a-z])api([^a-z]|$)/.test(key)) {
    return base({
      scene: "api",
      bg: "#155E75",
      accent: "#67E8F9",
      soft: "#A5F3FC",
      hook: "Contracts first. UI second.",
      layout: "illustration",
    });
  }
  if (/(playwright|selenium|automation|\bci\b)/.test(key)) {
    return base({
      scene: "code",
      bg: "#0F172A",
      accent: "#38BDF8",
      soft: "#7DD3FC",
      hook: "Automation that matches how you ship",
      layout: "report",
    });
  }
  if (/(mobile|device)/.test(key)) {
    return base({
      scene: "mobile",
      bg: "#9D174D",
      accent: "#F9A8D4",
      soft: "#FBCFE8",
      hook: "Real journeys. Real devices.",
      layout: "illustration",
    });
  }
  if (/(performance|latency|load|stress)/.test(key)) {
    return base({
      scene: "chart",
      bg: "#7F1D1D",
      accent: "#FCA5A5",
      soft: "#FECACA",
      hook: "When p95 becomes a sales problem",
      layout: "illustration",
    });
  }
  if (/(vs|versus|compare|comparison)/.test(key)) {
    return base({
      scene: "compare",
      bg: "#1D4ED8",
      accent: "#BFDBFE",
      soft: "#DBEAFE",
      hook: "Pick the model that fits your team",
      layout: "illustration",
    });
  }
  if (/(bug|defect|life-cycle|lifecycle|production)/.test(key)) {
    return base({
      scene: "bug",
      bg: "#9A3412",
      accent: "#FDBA74",
      soft: "#FFEDD5",
      hook: "Catch issues before customers do",
      layout: "illustration",
    });
  }
  if (/(release|gate|regression)/.test(key)) {
    return base({
      scene: "gate",
      bg: "#312E81",
      accent: "#C4B5FD",
      soft: "#DDD6FE",
      hook: "Release gates remote teams can trust",
      layout: "illustration",
    });
  }
  if (/(canada|canadian)/.test(key)) {
    return base({
      scene: "canada",
      bg: "#991B1B",
      accent: "#FECACA",
      soft: "#FEE2E2",
      hook: "Remote QA across Canadian timezones",
      layout: "illustration",
    });
  }
  if (/(hire|retainer|partner|agency|company|outsourced)/.test(key)) {
    return base({
      scene: "people",
      bg: "#1E3A8A",
      accent: "#93C5FD",
      soft: "#BFDBFE",
      hook: "Senior QA without the hiring delay",
      layout: "illustration",
    });
  }
  if (/(interview)/.test(key)) {
    return base({
      scene: "interview",
      bg: "#0F766E",
      accent: "#5EEAD4",
      soft: "#99F6E4",
      hook: "Questions that separate signal from noise",
      layout: "report",
    });
  }
  if (/(sqa|quality|why.*testing|important|benefits)/.test(key)) {
    return base({
      scene: "shield",
      bg: "#166534",
      accent: "#86EFAC",
      soft: "#BBF7D0",
      hook: "Quality that protects the release",
      layout: "illustration",
    });
  }
  if (/(sign|need)/.test(key)) {
    return base({
      scene: "search",
      bg: "#4C1D95",
      accent: "#D8B4FE",
      soft: "#E9D5FF",
      hook: "Signals it is time for a QA partner",
      layout: "illustration",
    });
  }
  return base({
    scene: "rocket",
    bg: "#0B1F4B",
    accent: "#60A5FA",
    soft: "#93C5FD",
    hook: "QA that keeps shipping on schedule",
    layout: "illustration",
  });
}

function logoMark(x: number, y: number, size = 44) {
  const s = size / 512;
  return `
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect width="512" height="512" rx="112" fill="#1D4ED8"/>
    <path d="M156 210c28-48 92-72 148-58" fill="none" stroke="#93C5FD" stroke-width="28" stroke-linecap="round"/>
    <path d="M356 302c-28 48-92 72-148 58" fill="none" stroke="#93C5FD" stroke-width="28" stroke-linecap="round"/>
    <path d="M188 268l52 52 112-128" fill="none" stroke="#FFFFFF" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}

function sceneArt(scene: Scene, accent: string, soft: string, ink: string) {
  switch (scene) {
    case "compare":
      return `
  <g transform="translate(620 90)">
    <rect x="40" y="40" width="200" height="360" rx="36" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="8"/>
    <rect x="280" y="40" width="200" height="360" rx="36" fill="${accent}" opacity="0.35" stroke="${ink}" stroke-width="8"/>
    <circle cx="140" cy="160" r="42" fill="${soft}"/>
    <circle cx="380" cy="160" r="42" fill="${ink}" opacity="0.7"/>
    <path d="M210 240 H310" stroke="${ink}" stroke-width="12" stroke-linecap="round" opacity="0.55"/>
    <text x="140" y="320" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">A</text>
    <text x="380" y="320" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">B</text>
  </g>`;
    case "checklist":
      return `
  <g transform="translate(680 80)">
    <rect x="0" y="0" width="420" height="470" rx="40" fill="${ink}" opacity="0.12"/>
    <rect x="36" y="40" width="348" height="390" rx="28" fill="${ink}" opacity="0.1" stroke="${soft}" stroke-width="6"/>
    ${[0, 1, 2, 3, 4]
      .map((i) => {
        const y = 90 + i * 60;
        return `<rect x="70" y="${y}" width="36" height="36" rx="10" fill="${accent}" opacity="0.9"/>
    <path d="M78 ${y + 18} l10 10 18-22" fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>
    <rect x="130" y="${y + 8}" width="${260 - i * 18}" height="18" rx="9" fill="${ink}" opacity="0.35"/>`;
      })
      .join("\n")}
  </g>`;
    case "code":
      return `
  <g transform="translate(620 110)">
    <rect x="0" y="0" width="500" height="380" rx="32" fill="#020617" opacity="0.55" stroke="${accent}" stroke-width="5"/>
    <circle cx="48" cy="48" r="12" fill="#F87171"/><circle cx="84" cy="48" r="12" fill="#FBBF24"/><circle cx="120" cy="48" r="12" fill="#4ADE80"/>
    <text x="48" y="140" fill="${soft}" font-family="ui-monospace, Menlo, monospace" font-size="34" font-weight="700">await test.step(</text>
    <text x="72" y="200" fill="${ink}" opacity="0.85" font-family="ui-monospace, Menlo, monospace" font-size="34">"checkout"</text>
    <text x="48" y="260" fill="${soft}" font-family="ui-monospace, Menlo, monospace" font-size="34" font-weight="700">)</text>
    <text x="48" y="330" fill="${accent}" font-family="ui-monospace, Menlo, monospace" font-size="34" font-weight="700">expect(ok).toBe(true)</text>
  </g>`;
    case "api":
      return `
  <g transform="translate(700 120)">
    <circle cx="120" cy="120" r="70" fill="none" stroke="${soft}" stroke-width="14"/>
    <circle cx="320" cy="120" r="70" fill="none" stroke="${accent}" stroke-width="14"/>
    <circle cx="220" cy="300" r="70" fill="none" stroke="${ink}" stroke-width="14" opacity="0.55"/>
    <path d="M185 120 H255 M278 165 L250 255 M162 165 L190 255" stroke="${ink}" stroke-width="14" stroke-linecap="round" opacity="0.55"/>
    <text x="120" y="130" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800">API</text>
    <text x="320" y="130" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800">UI</text>
  </g>`;
    case "mobile":
      return `
  <g transform="translate(760 70)">
    <rect x="40" y="20" width="250" height="480" rx="42" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="8"/>
    <rect x="70" y="80" width="190" height="320" rx="18" fill="${accent}" opacity="0.25"/>
    <circle cx="165" cy="450" r="18" fill="${ink}" opacity="0.45"/>
    <rect x="120" y="40" width="90" height="16" rx="8" fill="${ink}" opacity="0.35"/>
    <path d="M100 160 h130 M100 210 h100 M100 260 h115" stroke="${ink}" stroke-width="12" stroke-linecap="round" opacity="0.35"/>
  </g>`;
    case "chart":
      return `
  <g transform="translate(650 120)">
    <rect x="0" y="0" width="460" height="360" rx="32" fill="${ink}" opacity="0.1" stroke="${soft}" stroke-width="6"/>
    <path d="M60 280 L140 200 L210 230 L300 110 L400 150" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="400" cy="150" r="16" fill="${ink}"/>
    <path d="M60 300 H420" stroke="${ink}" stroke-width="6" opacity="0.25"/>
    <text x="400" y="120" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800">p95</text>
  </g>`;
    case "cost":
      return `
  <g transform="translate(720 90)">
    <circle cx="200" cy="220" r="170" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="10"/>
    <circle cx="200" cy="220" r="120" fill="${accent}" opacity="0.35"/>
    <text x="200" y="250" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="140" font-weight="800">$</text>
    <path d="M40 400 Q200 320 360 400" fill="none" stroke="${ink}" stroke-width="10" opacity="0.25"/>
  </g>`;
    case "ai":
      return `
  <g transform="translate(660 100)">
    <rect x="20" y="40" width="220" height="180" rx="28" fill="${ink}" opacity="0.12" stroke="${accent}" stroke-width="8"/>
    <text x="130" y="150" text-anchor="middle" fill="${soft}" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="800">AI</text>
    <rect x="160" y="180" width="220" height="180" rx="28" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="8"/>
    <text x="270" y="290" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="800">QA</text>
    <path d="M130 220 C130 250, 160 250, 160 280" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
  </g>`;
    case "bug":
      return `
  <g transform="translate(700 110)">
    <ellipse cx="200" cy="200" rx="130" ry="100" fill="${accent}" opacity="0.4" stroke="${soft}" stroke-width="10"/>
    <path d="M80 120 L40 70 M320 120 L360 70 M80 280 L40 330 M320 280 L360 330 M200 90 V40 M200 310 V360" stroke="${soft}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="150" cy="180" r="16" fill="${ink}"/><circle cx="250" cy="180" r="16" fill="${ink}"/>
    <path d="M150 250 Q200 280 250 250" fill="none" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
  </g>`;
    case "gate":
      return `
  <g transform="translate(700 80)">
    <rect x="60" y="40" width="60" height="420" rx="16" fill="${accent}" opacity="0.7"/>
    <rect x="300" y="40" width="60" height="420" rx="16" fill="${accent}" opacity="0.7"/>
    <rect x="60" y="40" width="300" height="50" rx="16" fill="${soft}"/>
    <path d="M150 220 H270" stroke="${ink}" stroke-width="16" stroke-linecap="round" opacity="0.7"/>
    <circle cx="210" cy="220" r="24" fill="${ink}" opacity="0.8"/>
  </g>`;
    case "canada":
      return `
  <g transform="translate(720 100)">
    <rect x="40" y="40" width="360" height="400" rx="36" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="8"/>
    <path d="M220 120 l40 100 110 10 -85 70 28 105 -93-60 -93 60 28-105 -85-70 110-10z" fill="${soft}"/>
  </g>`;
    case "people":
      return `
  <g transform="translate(680 120)">
    <circle cx="140" cy="140" r="70" fill="${accent}" opacity="0.85"/>
    <circle cx="300" cy="140" r="70" fill="${soft}" opacity="0.75"/>
    <circle cx="220" cy="200" r="70" fill="${ink}" opacity="0.35"/>
    <path d="M60 360 C120 260, 180 260, 220 260 S320 260, 380 360" fill="none" stroke="${ink}" stroke-width="18" stroke-linecap="round" opacity="0.45"/>
  </g>`;
    case "interview":
      return `
  <g transform="translate(700 100)">
    <rect x="40" y="40" width="400" height="400" rx="36" fill="${ink}" opacity="0.12" stroke="${soft}" stroke-width="8"/>
    <text x="240" y="240" text-anchor="middle" fill="${soft}" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="800">Q</text>
    <circle cx="330" cy="160" r="34" fill="${accent}"/>
    <text x="330" y="172" text-anchor="middle" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">?</text>
  </g>`;
    case "search":
      return `
  <g transform="translate(720 110)">
    <circle cx="180" cy="180" r="120" fill="none" stroke="${soft}" stroke-width="22"/>
    <path d="M270 270 L360 360" stroke="${accent}" stroke-width="28" stroke-linecap="round"/>
    <circle cx="180" cy="180" r="48" fill="${accent}" opacity="0.35"/>
  </g>`;
    case "rocket":
      return `
  <g transform="translate(740 90)">
    <path d="M180 60 C260 140, 260 260, 180 420 C100 260, 100 140, 180 60Z" fill="${accent}" opacity="0.45" stroke="${soft}" stroke-width="8"/>
    <circle cx="180" cy="200" r="36" fill="${ink}" opacity="0.7"/>
    <path d="M120 320 L80 400 M240 320 L280 400" stroke="${soft}" stroke-width="16" stroke-linecap="round"/>
  </g>`;
    default:
      return `
  <g transform="translate(740 110)">
    <rect x="40" y="40" width="320" height="360" rx="48" fill="${accent}" opacity="0.35" stroke="${soft}" stroke-width="10"/>
    <path d="M130 240 l60 60 120-140" fill="none" stroke="${ink}" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
  }
}

function buildSvg(title: string, spec: CoverSpec) {
  const hookLines = wrapLines(spec.hook, 28, 2);
  const reportTitle = wrapLines(title, 26, 3);

  if (spec.layout === "report") {
    const titleSvg = reportTitle
      .map((line, i) => `<text x="72" y="${230 + i * 58}" fill="${spec.ink}" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="800">${escapeXml(line)}</text>`)
      .join("\n  ");
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${spec.bg}"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="80" r="220" fill="${spec.accent}" opacity="0.15"/>
  ${logoMark(72, 64, 56)}
  <text x="148" y="102" fill="${spec.ink}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">${escapeXml(BRAND)}</text>
  ${titleSvg}
  <text x="72" y="560" fill="${spec.ink}" opacity="0.55" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="600">Practical QA for product teams</text>
  ${sceneArt(spec.scene, spec.accent, spec.soft, spec.ink)}
</svg>
`;
  }

  // Illustration-first (Testlio middle-card style): big art + short hook, title stays under card
  const hookSvg = hookLines
    .map((line, i) => `<text x="72" y="${470 + i * 44}" fill="${spec.ink}" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800">${escapeXml(line)}</text>`)
    .join("\n  ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(title)}">
  <rect width="1200" height="630" fill="${spec.bg}"/>
  <circle cx="160" cy="520" r="200" fill="${spec.accent}" opacity="0.12"/>
  <circle cx="1100" cy="-20" r="180" fill="${spec.ink}" opacity="0.06"/>
  ${logoMark(64, 56, 52)}
  <text x="136" y="92" fill="${spec.ink}" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700">${escapeXml(BRAND)}</text>
  ${sceneArt(spec.scene, spec.accent, spec.soft, spec.ink)}
  ${hookSvg}
</svg>
`;
}

function main() {
  const outDir = path.join(process.cwd(), "public/images/blog");
  fs.mkdirSync(outDir, { recursive: true });
  const entries: string[] = [];

  for (const post of blogPosts) {
    const spec = classify(post.slug, post.title, post.tags);
    const svg = buildSvg(post.title, spec);
    fs.writeFileSync(path.join(outDir, `${post.slug}.svg`), svg, "utf8");
    entries.push(`  "${post.slug}": {
    src: "/images/blog/${post.slug}.svg",
    accent: "${spec.accent}",
    bg: "${spec.bg}",
  }`);
    console.log(`✓ ${post.slug} [${spec.scene}/${spec.layout}]`);
  }

  fs.writeFileSync(
    path.join(process.cwd(), "lib/blog-covers.ts"),
    `export const blogCovers: Record<
  string,
  { src: string; accent: string; bg: string }
> = {
${entries.join(",\n")},
};

export function getBlogCover(slug: string) {
  return (
    blogCovers[slug] ?? {
      src: "/images/blog/free-qa-audit-what-you-get.svg",
      accent: "#60A5FA",
      bg: "#0B1F4B",
    }
  );
}
`,
    "utf8",
  );

  fs.writeFileSync(
    path.join(outDir, "README.md"),
    `# Blog covers (Testlio-style)

Illustration-first 1200×630 SVGs matched to each post topic.

\`\`\`bash
npm run generate:blog-covers
\`\`\`
`,
    "utf8",
  );

  console.log(`\nGenerated ${blogPosts.length} covers.`);
}

main();
