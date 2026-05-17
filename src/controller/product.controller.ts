import type { IncomingMessage, ServerResponse } from "node:http";
import { readProducts } from "../service/product.service";
import type { IProduct } from "../types/product.type";


export const productController = (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    // console.log(urlParts); // ['', 'products', '123']
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;
    // console.log(id); // 123

    if (url === "/products" && method === "GET") {      // Get all products
        const products = readProducts();

        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(
            JSON.stringify({
                message: "Products retrieved successfully",
                data: products
            })
        );
    } else if (method === "GET" && id !== null) {   // Get product by id
        const products = readProducts();

        const product = products.find((p : IProduct) => p.id === id);

        // console.log(product);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Product retrieved successfully",
                data: product
            })
        );
    }
}


