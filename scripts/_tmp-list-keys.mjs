import fs from "fs";
const src = fs.readFileSync("src/data/cityPageContent.ts", "utf8");
const keys = [...src.matchAll(/"([a-z-]+\/[a-z-]+)":\s*\{/g)].map((m) => m[1]);
console.log("keys", keys.length);
console.log(keys.join("\n"));

const sc = fs.readFileSync("src/data/serviceCountryContent.ts", "utf8");
const scKeys = [...sc.matchAll(/"([a-z-]+\/[a-z-]+)":\s*\{/g)].map((m) => m[1]);
console.log("\nserviceCountry keys", scKeys.length);
console.log(scKeys.join("\n"));
