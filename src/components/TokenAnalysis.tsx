import React from 'react';
import { Brain, Search, TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react';
import { TokenMetrics } from './TokenMetrics';
import { TokenChart } from './TokenChart';

export function TokenAnalysis() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Token Analysis</h2>
        <div className="flex items-center">
          <Brain className="text-purple-500 w-5 h-5 mr-2 animate-pulse" />
          <span className="text-purple-500">AI-Powered Analysis</span>
        </div>
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Enter token contract address..."
          className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" />
      </div>
      
      <TokenMetrics />
      <TokenChart />
      
      <div className="mt-6 space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="text-green-400 w-4 h-4 mr-2" />
            <h3 className="text-white font-medium">Volume Analysis</h3>
          </div>
          <p className="text-gray-300">24h Volume increased by 245% compared to 7-day average.</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="text-yellow-400 w-4 h-4 mr-2" />
            <h3 className="text-white font-medium">Risk Assessment</h3>
          </div>
          <p className="text-gray-300">Medium risk. Contract verified on Etherscan. LP locked for 6 months.</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <BarChart3 className="text-blue-400 w-4 h-4 mr-2" />
            <h3 className="text-white font-medium">Social Sentiment</h3>
          </div>
          <p className="text-gray-300">Positive mentions increased by 180% in the last hour.</p>
        </div>
      </div>
    </div>
  );
}