import React from 'react';
import { Flame, Coins, Wallet, Plus } from 'lucide-react';

interface NavbarProps {
  balance: number;
  tokens: number;
  onBuyTokens: () => void;
}

export function Navbar({ balance, tokens, onBuyTokens }: NavbarProps) {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">SuiZard</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={onBuyTokens}
            className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Coins className="w-5 h-5 text-cyan-400" />
            <span>{tokens} Tokens</span>
            <Plus className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-400" />
            <span>{balance} SUI</span>
          </div>
        </div>
      </div>
    </nav>
  );
}