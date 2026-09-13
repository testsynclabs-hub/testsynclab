/**
 * Generate branded blog covers for every post (1200×630 SVG).
 *
 * Usage:
 *   npx tsx scripts/generate-blog-covers.ts
 *
 * When you add a new blog post:
 *   1. Add the post in lib/blog*.ts
 *   2. Run this script
 *   3. Commit public/images/blog/<slug>.svg + lib/blog-covers.ts
 */
import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../lib/blog";

type Palette = {
  bg0: string;
  bg1: string;
  accent: string;
  soft: string;
};

const PALETTES: Palette[] = [
  { bg0: "#0B1F4B", bg1: "#020617", accent: "#60A5FA", soft: "#93C5FD" },
  { bg0: "#0C4A6E", bg1: "#082F49", accent: "#38BDF8", soft: "#7DD3FC" },
  { bg0: "#1E3A8A", bg1: "#0F172A", accent: "#818CF8", soft: "#A5B4FC" },
  { bg0: "#312E81", bg1: "#0F172A", accent: "#A78BFA", soft: "#C4B5FD" },
  { bg0: "#4C1D95", bg1: "#1E1B4B", accent: "#C4B5FD", soft: "#DDD6FE" },
  { bg0: "#0F3D3E", bg1: "#042F2E", accent: "#2DD4BF", soft: "#5EEAD4" },
  { bg0: "#14532D", bg1: "#052E16", accent: "#4ADE80", soft: "#86EFAC" },
  { bg0: "#365314", bg1: "#1A2E05", accent: "#A3E635", soft: "#BEF264" },
  { bg0: "#7C2D12", bg1: "#431407", accent: "#FB923C", soft: "#FDBA74" },
  { bg0: "#7F1D1D", bg1: "#450A0A", accent: "#F87171", soft: "#FCA5A5" },
  { bg0: "#831843", bg1: "#500724", accent: "#F472B6", soft: "#F9A8D4" },
  { bg0: "#422006", bg1: "#1C1917", accent: "#FBBF24", soft: "#FDE68A" },
  { bg0: "#164E63", bg1: "#083344", accent: "#22D3EE", soft: "#67E8F9" },
  { bg0: "#1F2937", bg1: "#020617", accent: "#93C5FD", soft: "#BFDBFE" },
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapTitle(title: string, maxLen = 28): string[] {
  if (title.length <= maxLen) return [title];
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLen && current) {
      lines.push(current);
      current = word;
      if (lines.length === 2) break;
    } else {
      current = next;
    }
  }
  if (lines.length < 2 && current) lines.push(current);
  const joined = lines.join(" ");
  if (lines.length === 2 && title.length > joined.length) {
    lines[1] = `${lines[1].replace(/\s+\S*$/, "")}…`;
  }
  return lines.slice(0, 2);
}

function shortSubtitle(description: string) {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length <= 64) return clean;
  return `${clean.slice(0, 61).replace(/\s+\S*$/, "")}…`;
}

function pickPalette(slug: string, title: string): Palette {
  const key = `${slug} ${title}`.toLowerCase();
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return PALETTES[hash % PALETTES.length];
}

function motifKind(slug: string, title: string, tags: string[]) {
  const key = `${slug} ${title} ${tags.join(" ")}`.toLowerCase();
  if (/(checklist|audit|launch)/.test(key)) return "checklist";
  if (/(cost|price|affordable|cheap|budget)/.test(key)) return "cost";
  if (/(^|[^a-z])(ai|llm|chatbot|prompt)([^a-z]|$)/.test(key)) return "ai";
  if (/(playwright|selenium|automation|\bci\b)/.test(key)) return "code";
  if (/(^|[^a-z])api([^a-z]|$)/.test(key)) return "api";
  if (/(mobile|device)/.test(key)) return "mobile";
  if (/(performance|latency|load|stress)/.test(key)) return "chart";
  if (/(vs|versus|compare|comparison)/.test(key)) return "compare";
  if (/(bug|defect|life-cycle|lifecycle)/.test(key)) return "bug";
  if (/(release|gate|regression)/.test(key)) return "gate";
  if (/(canada|canadian)/.test(key)) return "canada";
  if (/(hire|retainer|partner|agency|company)/.test(key)) return "people";
  if (/(interview)/.test(key)) return "interview";
  return "shield";
}

function motifSvg(kind: string, accent: string, soft: string) {
  switch (kind) {
    case "compare":
      return `<rect x="820" y="170" width="150" height="260" rx="24" fill="${accent}" opacity="0.22" stroke="${accent}" stroke-width="6"/>
  <rect x="1000" y="170" width="150" height="260" rx="24" fill="#fff" opacity="0.10" stroke="#fff" stroke-width="6"/>
  <circle cx="895" cy="270" r="26" fill="${accent}"/>
  <circle cx="1075" cy="270" r="26" fill="#fff" opacity="0.45"/>
  <path d="M960 310 H990" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.45"/>`;
    case "checklist":
      return `<rect x="860" y="160" width="250" height="300" rx="28" fill="#000" opacity="0.25" stroke="${accent}" stroke-width="5"/>
  <path d="M910 240 l28 28 58-70" fill="none" stroke="${soft}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="900" y="320" width="170" height="16" rx="8" fill="#fff" opacity="0.35"/>
  <rect x="900" y="360" width="140" height="16" rx="8" fill="#fff" opacity="0.25"/>
  <rect x="900" y="400" width="155" height="16" rx="8" fill="#fff" opacity="0.2"/>`;
    case "code":
      return `<rect x="820" y="180" width="300" height="220" rx="24" fill="#000" opacity="0.28" stroke="${accent}" stroke-width="5"/>
  <circle cx="860" cy="220" r="10" fill="#F87171"/><circle cx="890" cy="220" r="10" fill="#FBBF24"/><circle cx="920" cy="220" r="10" fill="#4ADE80"/>
  <text x="860" y="290" fill="${soft}" font-family="ui-monospace, Menlo, monospace" font-size="28" font-weight="700">await test()</text>
  <text x="860" y="340" fill="#fff" opacity="0.55" font-family="ui-monospace, Menlo, monospace" font-size="24">expect(ok)</text>`;
    case "api":
      return `<circle cx="920" cy="250" r="34" fill="none" stroke="${accent}" stroke-width="8"/>
  <circle cx="1040" cy="250" r="34" fill="none" stroke="${soft}" stroke-width="8"/>
  <circle cx="980" cy="360" r="34" fill="none" stroke="#fff" stroke-width="8" opacity="0.55"/>
  <path d="M954 250 H1006 M1008 274 L1000 340 M952 274 L960 340" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.45"/>`;
    case "mobile":
      return `<rect x="920" y="150" width="170" height="320" rx="28" fill="#000" opacity="0.28" stroke="${accent}" stroke-width="6"/>
  <rect x="945" y="200" width="120" height="180" rx="12" fill="${accent}" opacity="0.25"/>
  <circle cx="1005" cy="420" r="14" fill="#fff" opacity="0.5"/>`;
    case "chart":
      return `<rect x="840" y="180" width="280" height="240" rx="24" fill="#000" opacity="0.25" stroke="${accent}" stroke-width="5"/>
  <path d="M880 360 L940 300 L990 320 L1050 230 L1100 260" fill="none" stroke="${soft}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="1100" cy="260" r="12" fill="${accent}"/>`;
    case "cost":
      return `<circle cx="980" cy="300" r="110" fill="#000" opacity="0.25" stroke="${accent}" stroke-width="8"/>
  <text x="980" y="325" text-anchor="middle" fill="${soft}" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="800">$</text>`;
    case "ai":
      return `<rect x="860" y="170" width="230" height="150" rx="22" fill="#000" opacity="0.28" stroke="${accent}" stroke-width="5"/>
  <text x="975" y="260" text-anchor="middle" fill="${soft}" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800">AI</text>
  <rect x="910" y="300" width="230" height="150" rx="22" fill="#000" opacity="0.28" stroke="${soft}" stroke-width="5"/>
  <text x="1025" y="390" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800">QA</text>`;
    case "bug":
      return `<ellipse cx="980" cy="300" rx="90" ry="70" fill="${accent}" opacity="0.3" stroke="${soft}" stroke-width="6"/>
  <path d="M890 250 L860 220 M1070 250 L1100 220 M890 350 L860 380 M1070 350 L1100 380 M980 220 V190 M980 380 V410" stroke="${soft}" stroke-width="10" stroke-linecap="round"/>
  <circle cx="950" cy="290" r="10" fill="#fff"/><circle cx="1010" cy="290" r="10" fill="#fff"/>`;
    case "gate":
      return `<rect x="900" y="160" width="40" height="300" rx="10" fill="${accent}" opacity="0.55"/>
  <rect x="1040" y="160" width="40" height="300" rx="10" fill="${accent}" opacity="0.55"/>
  <rect x="900" y="160" width="180" height="36" rx="10" fill="${soft}" opacity="0.7"/>
  <path d="M970 280 h80" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.6"/>`;
    case "canada":
      return `<rect x="880" y="190" width="220" height="240" rx="28" fill="#000" opacity="0.25" stroke="${accent}" stroke-width="5"/>
  <path d="M990 250 l18 48 52 4 -40 34 12 50 -42 -28 -42 28 12-50 -40-34 52-4z" fill="${soft}" opacity="0.85"/>`;
    case "people":
      return `<circle cx="940" cy="250" r="42" fill="${accent}" opacity="0.55"/>
  <circle cx="1040" cy="250" r="42" fill="${soft}" opacity="0.45"/>
  <path d="M880 390c20-60 80-60 100-60s80 0 100 60" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity="0.4"/>`;
    case "interview":
      return `<rect x="860" y="180" width="260" height="260" rx="24" fill="#000" opacity="0.25" stroke="${accent}" stroke-width="5"/>
  <text x="990" y="290" text-anchor="middle" fill="${soft}" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="800">Q?</text>
  <rect x="910" y="340" width="160" height="18" rx="9" fill="#fff" opacity="0.3"/>`;
    default:
      return `<rect x="900" y="190" width="200" height="220" rx="36" fill="${accent}" opacity="0.28" stroke="${soft}" stroke-width="6"/>
  <path d="M960 300 l30 30 60-70" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
}

function buildSvg(
  title: string,
  description: string,
  palette: Palette,
  kind: string,
) {
  const lines = wrapTitle(title);
  const subtitle = shortSubtitle(description);
  const titleSvg = lines
    .map((line, index) => {
      const y = 200 + index * 64;
      return `<text x="72" y="${y}" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="800">${escapeXml(line)}</text>`;
    })
    .join("\n  ");
  const subtitleY = 200 + lines.length * 64 + 24;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette.bg0}"/>
      <stop offset="100%" stop-color="${palette.bg1}"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="28%" r="52%">
      <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="140" cy="520" r="180" fill="${palette.accent}" opacity="0.08"/>
  <circle cx="1180" cy="40" r="120" fill="#fff" opacity="0.05"/>
  <rect x="72" y="72" width="92" height="34" rx="17" fill="none" stroke="#fff" stroke-width="2" opacity="0.75"/>
  <text x="118" y="95" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2">BLOG</text>
  ${titleSvg}
  <text x="72" y="${subtitleY}" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="500" opacity="0.78">${escapeXml(subtitle)}</text>
  <text x="72" y="560" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="600" opacity="0.55">TestSync Lab</text>
  ${motifSvg(kind, palette.accent, palette.soft)}
</svg>
`;
}

function main() {
  const outDir = path.join(process.cwd(), "public/images/blog");
  fs.mkdirSync(outDir, { recursive: true });

  const coverEntries: string[] = [];

  for (const post of blogPosts) {
    const palette = pickPalette(post.slug, post.title);
    const kind = motifKind(post.slug, post.title, post.tags);
    const svg = buildSvg(post.title, post.description, palette, kind);
    fs.writeFileSync(path.join(outDir, `${post.slug}.svg`), svg, "utf8");
    coverEntries.push(`  "${post.slug}": {
    src: "/images/blog/${post.slug}.svg",
    accent: "${palette.accent}",
    bg: "${palette.bg0}",
  }`);
    console.log(`✓ ${post.slug} [${kind}]`);
  }

  const coversTs = `export const blogCovers: Record<
  string,
  { src: string; accent: string; bg: string }
> = {
${coverEntries.join(",\n")},
};

export function getBlogCover(slug: string) {
  return (
    blogCovers[slug] ?? {
      src: "/images/blog/free-qa-audit-what-you-get.svg",
      accent: "#3B82F6",
      bg: "#0B1F4B",
    }
  );
}
`;
  fs.writeFileSync(path.join(process.cwd(), "lib/blog-covers.ts"), coversTs, "utf8");

  fs.writeFileSync(
    path.join(outDir, "README.md"),
    `# Blog cover images

Branded 1200×630 SVG covers for each post (TestSync Lab style).

## Regenerate after adding a post

\`\`\`bash
npx tsx scripts/generate-blog-covers.ts
\`\`\`

Then commit \`public/images/blog/<slug>.svg\` and \`lib/blog-covers.ts\`.
`,
    "utf8",
  );

  console.log(`\nGenerated ${blogPosts.length} covers.`);
}

main();
