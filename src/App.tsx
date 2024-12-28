import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { NetworkSelector } from './components/NetworkSelector';
import { TopPumpingTokens } from './components/TopPumpingTokens';
import { TokenAnalysis } from './components/TokenAnalysis';

function App() {
  return (
    <MainLayout>
      <NetworkSelector />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopPumpingTokens />
        <TokenAnalysis />
      </div>
    </MainLayout>
  );
}

export default App;