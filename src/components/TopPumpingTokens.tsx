import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Token } from '../types';

const tokens: Token[] = [
  { 
    symbol: 'PEPE', 
    name: 'Pepe', 
    pumpPercentage: 245, 
    volume: '1.2M', 
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=64&h=64&fit=crop' 
  },
  { 
    symbol: 'WOJAK', 
    name: 'Wojak Finance', 
    pumpPercentage: 180, 
    volume: '800K', 
    logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=64&h=64&fit=crop' 
  },
  { 
    symbol: 'FLOKI', 
    name: 'Floki Inu', 
    pumpPercentage: 156, 
    volume: '650K', 
    logo: 'https://images.unsplash.com/photo-1647563927123-c748363f55c9?w=64&h=64&fit=crop' 
  },
  { 
    symbol: 'SHIB', 
    name: 'Shiba Inu', 
    pumpPercentage: 134, 
    volume: '520K', 
    logo: 'https://images.unsplash.com/photo-1647563927167-c96a1cb9a266?w=64&h=64&fit=crop' 
  },
  { 
    symbol: 'DOGE', 
    name: 'Dogecoin', 
    pumpPercentage: 125, 
    volume: '480K', 
    logo: 'https://images.unsplash.com/photo-1647563927973-58115cb3e310?w=64&h=64&fit=crop' 
  }
];

export function TopPumpingTokens() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <TrendingUp className="text-green-400 mr-2" />
          <h2 className="text-xl font-bold text-white">Top Pumping Tokens</h2>
        </div>
        <span className="text-sm text-gray-400">Last 24h</span>
      </div>
      <div className="space-y-4">
        {tokens.map((token) => (
          <div key={token.symbol} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-650 transition-colors">
            <div className="flex items-center">
              <img src={token.logo} alt={token.name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <h3 className="text-white font-medium">${token.symbol}</h3>
                <p className="text-gray-400 text-sm">{token.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-green-400 font-bold">+{token.pumpPercentage}%</p>
                <p className="text-gray-400 text-sm">${token.volume}</p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors">
                <span>Analyze</span>
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}