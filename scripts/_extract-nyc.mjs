import fs from "fs";
const s = fs.readFileSync("src/data/cityPageContent.ts", "utf8");
const start = s.indexOf('"united-states/new-york"');
const end = s.indexOf('"united-states/san-francisco"');
fs.writeFileSync("scripts/_nyc-snippet.txt", s.slice(start, end));
console.log("nyc chars", end - start);
