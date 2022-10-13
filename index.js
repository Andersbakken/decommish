#!/usr/bin/env node

const decomment = require("decomment");
const fs = require("fs");

if (process.argv.length < 3) {
    console.error("Bad arguments", process.argv);
    process.exit(1);
}

const src = fs.readFileSync(process.argv[2], "utf8");
const out = decomment(src);
if (process.argv.length >= 4) {
    fs.writeFileSync(process.argv[3], out);
} else {
    console.log(out);
}
