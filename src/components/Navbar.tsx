import React from 'react';
import { Brain, Globe, Settings, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-500 animate-pulse" />
            <span className="ml-2 text-xl font-bold text-white">PumpBot AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            <Settings className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            <User className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}