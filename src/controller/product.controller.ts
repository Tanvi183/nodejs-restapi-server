import type { IncomingMessage, ServerResponse } from "node:http";
import { readProducts } from "../service/product.service";


export const productController = (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const url = req.url;
    const method = req.method;

    if (url === "/products" && method === "GET") {

        const products = readProducts();

        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(
            JSON.stringify({
                message: "Products retrieved successfully",
                data: products
            })
        );
    }
}


