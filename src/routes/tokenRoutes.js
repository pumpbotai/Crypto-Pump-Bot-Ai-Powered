import express from 'express';
import { getTopPumpingTokens, analyzeToken } from '../services/tokenService.js';

const router = express.Router();

router.get('/top-pumping', async (req, res) => {
  try {
    const tokens = await getTopPumpingTokens();
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/analyze', async (req, res) => {
  try {
    const { contractAddress } = req.body;
    const analysis = await analyzeToken(contractAddress);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const tokenRoutes = router;