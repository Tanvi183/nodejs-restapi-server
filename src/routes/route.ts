import type { IncomingMessage, ServerResponse } from "node:http";
import { productController } from "../controller/product.controller";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url);  '/', '/user', '/product'
    // console.log(req.method); '\GET', 'POST', 'PUT', 'DELETE'

    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
    //   console.log("This is root route");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is Home page" }));
    }
    
    else if (url?.startsWith("/products")) {
        productController(req, res);
    }
    
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
}