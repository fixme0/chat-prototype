import WebSocket from 'ws';

import { WS_EVENTS } from '../packages/api';

class WebSocketServer {
  constructor(server) {
    this.wss = new WebSocket.Server({ server });
  }

  get onlineClients() {
    return [...this.wss.clients].filter((client) => client.readyState === WebSocket.OPEN);
  }

  emitNewMessageCreated(message) {
    this.onlineClients.forEach((client) => {
      const event = JSON.stringify({
        type: WS_EVENTS.NEW_MESSAGE_CREATED,
        payload: message,
      });

      client.send(event);
    });
  }
}

export { WebSocketServer };
