import React from 'react';
import { 
  Brain, 
  LineChart, 
  AlertCircle, 
  BookOpen, 
  MessageCircle, 
  TrendingUp,
  BarChart2
} from 'lucide-react';

const menuItems = [
  { icon: Brain, label: 'Machine Learning Models', active: true },
  { icon: LineChart, label: 'Market Sentiment and Liquidity Analysis' },
  { icon: AlertCircle, label: 'Outlier Detection' },
  { icon: BookOpen, label: 'Order Book' },
  { icon: MessageCircle, label: 'Sentiment Analysis' },
  { icon: TrendingUp, label: 'Price Momentum' },
  { icon: BarChart2, label: 'Volume-Based Analysis' }
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              item.active 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}