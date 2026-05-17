import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProducts = () => {
    const data = fs.readFileSync(filePath, "utf-8");

    const products = JSON.parse(data);

    return products.products;
};