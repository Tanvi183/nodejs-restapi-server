import { createServer, IncomingMessage, ServerResponse, type Server } from "node:http";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log(req.url);  '/', '/user', '/product'
    // console.log(req.method); '\GET', 'POST', 'PUT', 'DELETE'

    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
    //   console.log("This is root route");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is root route" }));
    }
    
    else if (url?.startsWith("/products")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "This is product route" }));
    }
    
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }

});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});