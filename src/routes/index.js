import { tokenRoutes } from './tokenRoutes.js';
import { networkRoutes } from './networkRoutes.js';
import { analysisRoutes } from './analysisRoutes.js';

export function setupRoutes(app) {
  app.use('/api/tokens', tokenRoutes);
  app.use('/api/networks', networkRoutes);
  app.use('/api/analysis', analysisRoutes);
}