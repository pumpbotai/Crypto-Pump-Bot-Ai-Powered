from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import token_routes, network_routes, analysis_routes

app = FastAPI(title="PumpBot AI")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(token_routes.router, prefix="/api/tokens", tags=["tokens"])
app.include_router(network_routes.router, prefix="/api/networks", tags=["networks"])
app.include_router(analysis_routes.router, prefix="/api/analysis", tags=["analysis"])