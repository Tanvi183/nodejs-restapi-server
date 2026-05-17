import { createServer, IncomingMessage, ServerResponse, type Server } from "node:http";
import { routeHandler } from "./routes/route";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    routeHandler(req, res);
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});