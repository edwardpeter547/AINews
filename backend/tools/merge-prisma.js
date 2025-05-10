const fs = require("fs");
const path = require("path");


const modelDir = path.join(__dirname, "..", "prisma", "schema");
const outputFile = path.join(__dirname, "..", "prisma", "schema.prisma");

const header = `

generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "sqlite"
    url = env("DATABASE_URL")
}

`.trim();

const files = fs
    .readdirSync(modelDir)
    .filter(file => file.endsWith(".prisma"));


const models = files
    .map(file => fs.readFileSync(path.join(modelDir, file), {"encoding": "utf-8"}))
    .join("\n\n");

fs.writeFileSync(outputFile, header + "\n\n" + models);

console.log("✅ model files merged into schema.prisma");