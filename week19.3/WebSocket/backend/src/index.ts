import express from "express"
import WebSocket, { WebSocketServer } from "ws"

const app = express();
const httpServer = app.listen(8000);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        })
    })
    ws.send('Hello!, this is from SERVER!!')
});