import React from 'react';
import { Network } from '../types';

const networks: Network[] = [
  { id: 'eth', name: 'Ethereum', color: 'bg-blue-500' },
  { id: 'bsc', name: 'BSC', color: 'bg-yellow-500' },
  { id: 'sol', name: 'Solana', color: 'bg-purple-500' },
  { id: 'poly', name: 'Polygon', color: 'bg-pink-500' },
  { id: 'avax', name: 'Avalanche', color: 'bg-red-500' },
];

export function NetworkSelector() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {networks.map((network) => (
        <button
          key={network.id}
          className={`${network.color} p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105`}
        >
          <div className={`w-12 h-12 rounded-full ${network.color} border-2 border-white flex items-center justify-center`}>
            <span className="text-white font-bold">{network.name[0]}</span>
          </div>
          <span className="mt-2 text-white font-medium">{network.name}</span>
        </button>
      ))}
    </div>
  );
}