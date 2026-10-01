import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const products = JSON.parse(await readFile(path.join(root, "data/products.json"), "utf8"));

const cloth = {
  Books: ["#1B3630", "#23443C", "#16302B"],
  Copies: ["#6B3A2A", "#5A3124", "#7A4634"],
  Notebooks: ["#243044", "#1C2838", "#314258"],
  Registers: ["#6E3340", "#5C2A36", "#7E3E4C"],
  Stationery: ["#6B5428", "#574420", "#7C6434"],
  "Educational Products": ["#2F4A3E", "#243C32", "#3B5A4C"],
};

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function wrap(title, max = 16) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function coverSvg(product, index) {
  const palette = cloth[product.category] ?? ["#1B3630"];
  const fill = palette[index % palette.length];
  const lines = wrap(product.name);
  const fontSize = lines.length > 3 ? 30 : 36;
  const lineHeight = fontSize + 10;
  const start = 400 - ((lines.length - 1) * lineHeight) / 2;
  const title = lines
    .map(
      (line, lineIndex) =>
        `<text x="300" y="${start + lineIndex * lineHeight}" text-anchor="middle" fill="#F6F1E7" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}">${escapeXml(line)}</text>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" role="img" aria-label="${escapeXml(product.name)}">
  <rect width="600" height="800" fill="${fill}"/>
  <rect x="36" y="36" width="528" height="728" fill="none" stroke="#E7D3A8" stroke-width="2"/>
  <rect x="48" y="48" width="504" height="704" fill="none" stroke="#E7D3A8" stroke-width="1" opacity="0.45"/>
  <text x="300" y="128" text-anchor="middle" fill="#E7D3A8" font-family="Georgia, serif" font-size="18" letter-spacing="5">${escapeXml(product.category.toUpperCase())}</text>
  <line x1="190" y1="156" x2="410" y2="156" stroke="#E7D3A8" stroke-width="1"/>
  ${title}
  <text x="300" y="700" text-anchor="middle" fill="#E7D3A8" font-family="Georgia, serif" font-size="16" letter-spacing="3">CHISHTI PUBLICATIONS</text>
</svg>
`;
}

let written = 0;

for (const [index, product] of products.entries()) {
  if (!product.image || !product.image.endsWith(".svg")) continue;

  const file = path.join(root, "public", product.image);
  try {
    await access(file);
    continue;
  } catch {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, coverSvg(product, index));
    written += 1;
  }
}

console.log(`Wrote ${written} placeholder cover${written === 1 ? "" : "s"}.`);
