const fs = require("fs");
const t = fs.readFileSync(
  "d:/FlutterProject/golaxindiapvtltd/src/data/serviceCountryContent.ts",
  "utf8",
);
const start = t.indexOf("export const serviceCountryContent");
const content = t.slice(start);
const keys = [...content.matchAll(/"([^"]+)": \{/g)]
  .map((m) => m[1])
  .filter((k) => k.includes("/"));
console.log("keys", keys.length);
keys.forEach((k) => {
  const i = content.indexOf('"' + k + '"');
  const next =
    keys
      .map((x) => content.indexOf('"' + x + '"'))
      .filter((x) => x > i)
      .sort((a, b) => a - b)[0] || content.length;
  console.log(k, content.slice(i, next).length);
});
console.log("TOTAL_CONTENT", content.length);
