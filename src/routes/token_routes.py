from fastapi import APIRouter, HTTPException
from services.token_service import get_top_pumping_tokens, analyze_token
from models.token import TokenAnalysis

router = APIRouter()

@router.get("/top-pumping")
async def get_pumping_tokens():
    try:
        return await get_top_pumping_tokens()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/analyze")
async def analyze_token_route(contract_address: str) -> TokenAnalysis:
    try:
        return await analyze_token(contract_address)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))