import express from 'express';
import { WebSocketServer } from 'ws';
import { setupRoutes } from './routes/index.js';
import { setupWebSocket } from './websocket/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Setup routes
setupRoutes(app);

// Create HTTP server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Setup WebSocket server for real-time updates
const wss = new WebSocketServer({ server });
setupWebSocket(wss);