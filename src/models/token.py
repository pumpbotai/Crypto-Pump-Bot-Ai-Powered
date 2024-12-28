from pydantic import BaseModel
from typing import Optional

class Token(BaseModel):
    symbol: str
    name: str
    pump_percentage: float
    volume: str
    network_id: str

class TechnicalAnalysis(BaseModel):
    rsi: float
    macd: str
    volume_24h: str

class TokenAnalysis(BaseModel):
    pump_probability: float
    expected_gain: float
    volume: str
    technical_analysis: TechnicalAnalysis