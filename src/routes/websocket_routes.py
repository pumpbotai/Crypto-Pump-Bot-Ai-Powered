from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from websocket.websocket_manager import manager
import json

router = APIRouter()

@router.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str):
    await manager.connect(websocket, client_id)
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            
            if message["type"] == "SUBSCRIBE_TOKEN":
                # Handle token subscription
                pass
            elif message["type"] == "UNSUBSCRIBE_TOKEN":
                # Handle token unsubscription
                pass
                
    except WebSocketDisconnect:
        await manager.disconnect(websocket, client_id)