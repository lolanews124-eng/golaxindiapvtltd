import fs from "fs";

const path = "d:/FlutterProject/golaxindiapvtltd/src/data/cityPageContent.ts";
const src = fs.readFileSync(path, "utf8");
const keyRe = /"([^"]+)":\s*\{/g;
const keys = [];
let m;
while ((m = keyRe.exec(src)) !== null) {
  if (m[1].includes("/")) keys.push({ key: m[1], index: m.index });
}
const lengths = keys.map((k, i) => {
  const start = k.index;
  const end = i + 1 < keys.length ? keys[i + 1].index : src.lastIndexOf("};");
  const chunk = src.slice(start, end);
  return { key: k.key, len: chunk.length };
});
const ny = lengths.find((l) => l.key === "united-states/new-york");
console.log("NY length:", ny.len);
console.log("Total keys:", lengths.length);
console.log("\nAll lengths:");
for (const l of lengths) {
  const pct = ((l.len / ny.len) * 100).toFixed(0);
  const thin = l.len < ny.len * 0.7 ? " THIN" : "";
  console.log(`${l.len}\t${pct}%\t${l.key}${thin}`);
}
const thin = lengths.filter((l) => l.len < ny.len * 0.7);
console.log("\nThin count:", thin.length);
console.log(
  "Below 70%:",
  thin.map((t) => t.key).join(", ")
);
