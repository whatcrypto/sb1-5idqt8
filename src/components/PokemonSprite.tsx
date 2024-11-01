import React from 'react';

interface PokemonSpriteProps {
  evolution: 'suimander' | 'suimeleon' | 'suizard';
  className?: string;
}

export function PokemonSprite({ evolution, className = '' }: PokemonSpriteProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {evolution === 'suimander' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 relative">
            {/* Body */}
            <div className="absolute w-16 h-16 bg-blue-400 rounded-2xl left-4 top-4"></div>
            
            {/* Head */}
            <div className="absolute w-12 h-12 bg-blue-400 rounded-full left-6 top-0"></div>
            
            {/* Tail */}
            <div className="absolute w-4 h-12 bg-blue-400 rounded-full right-2 top-8 transform rotate-45">
              <div className="absolute w-6 h-6 bg-cyan-400 rounded-full -right-1 -top-1"></div>
            </div>
            
            {/* Eyes */}
            <div className="absolute w-2 h-2 bg-white rounded-full left-8 top-4"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full left-12 top-4"></div>
            
            {/* Belly */}
            <div className="absolute w-10 h-10 bg-cyan-300 rounded-2xl left-7 top-8"></div>
          </div>
        </div>
      )}

      {evolution === 'suimeleon' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 relative">
            {/* Body */}
            <div className="absolute w-20 h-24 bg-blue-500 rounded-2xl left-6 top-4"></div>
            
            {/* Head */}
            <div className="absolute w-16 h-16 bg-blue-500 rounded-full left-8 top-0">
              <div className="absolute w-8 h-8 bg-blue-500 rounded-tr-2xl -right-2 -top-2"></div>
            </div>
            
            {/* Tail */}
            <div className="absolute w-6 h-16 bg-blue-500 rounded-full right-2 top-8 transform rotate-45">
              <div className="absolute w-8 h-8 bg-cyan-400 rounded-full -right-1 -top-1"></div>
            </div>
            
            {/* Eyes */}
            <div className="absolute w-3 h-3 bg-white rounded-full left-10 top-6"></div>
            <div className="absolute w-3 h-3 bg-white rounded-full left-16 top-6"></div>
            
            {/* Belly */}
            <div className="absolute w-12 h-16 bg-cyan-300 rounded-2xl left-10 top-10"></div>
          </div>
        </div>
      )}

      {evolution === 'suizard' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 relative">
            {/* Body */}
            <div className="absolute w-24 h-28 bg-blue-600 rounded-2xl left-8 top-8"></div>
            
            {/* Wings */}
            <div className="absolute w-12 h-20 bg-cyan-500 rounded-tr-3xl left-0 top-4 transform -rotate-12"></div>
            <div className="absolute w-12 h-20 bg-cyan-500 rounded-tl-3xl right-0 top-4 transform rotate-12"></div>
            
            {/* Head */}
            <div className="absolute w-20 h-20 bg-blue-600 rounded-2xl left-10 top-0">
              <div className="absolute w-10 h-10 bg-blue-600 rounded-tr-2xl -right-2 -top-2"></div>
              <div className="absolute w-10 h-10 bg-blue-600 rounded-tl-2xl -left-2 -top-2"></div>
            </div>
            
            {/* Tail */}
            <div className="absolute w-8 h-20 bg-blue-600 rounded-full right-4 top-12 transform rotate-45">
              <div className="absolute w-10 h-10 bg-cyan-400 rounded-full -right-1 -top-1 animate-pulse"></div>
            </div>
            
            {/* Eyes */}
            <div className="absolute w-4 h-4 bg-white rounded-full left-12 top-8"></div>
            <div className="absolute w-4 h-4 bg-white rounded-full left-20 top-8"></div>
            
            {/* Belly */}
            <div className="absolute w-16 h-20 bg-cyan-400 rounded-2xl left-12 top-14"></div>
          </div>
        </div>
      )}
    </div>
  );
}