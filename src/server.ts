import { createServer, IncomingMessage, ServerResponse, type Server } from "node:http";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    console.log(req);
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});