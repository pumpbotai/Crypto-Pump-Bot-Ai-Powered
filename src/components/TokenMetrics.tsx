import React from 'react';

export function TokenMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gray-700 p-4 rounded-lg">
        <p className="text-gray-400 mb-1">Pump Probability</p>
        <p className="text-2xl font-bold text-green-400">85%</p>
        <p className="text-sm text-gray-400 mt-1">High confidence</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <p className="text-gray-400 mb-1">Expected Gain</p>
        <p className="text-2xl font-bold text-purple-400">50%</p>
        <p className="text-sm text-gray-400 mt-1">Next 24h</p>
      </div>
    </div>
  );
}