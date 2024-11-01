import React from 'react';
import { Trophy, Flame, Coins } from 'lucide-react';

interface GameStatsProps {
  totalCaught: number;
  totalEvolved: number;
  totalTraded: number;
}

export function GameStats({ totalCaught, totalEvolved, totalTraded }: GameStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="flex flex-col items-center">
        <Flame className="w-8 h-8 text-blue-400 mb-2" />
        <span className="text-sm text-white/80">Caught</span>
        <span className="text-2xl font-bold">{totalCaught}</span>
      </div>
      <div className="flex flex-col items-center">
        <Trophy className="w-8 h-8 text-cyan-400 mb-2" />
        <span className="text-sm text-white/80">Evolved</span>
        <span className="text-2xl font-bold">{totalEvolved}</span>
      </div>
      <div className="flex flex-col items-center">
        <Coins className="w-8 h-8 text-blue-400 mb-2" />
        <span className="text-sm text-white/80">Traded</span>
        <span className="text-2xl font-bold">{totalTraded}</span>
      </div>
    </div>
  );
}