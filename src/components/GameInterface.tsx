import React, { useState } from 'react';
import { PokemonSprite } from './PokemonSprite';

interface GameInterfaceProps {
  onCatch: () => void;
  tokens: number;
}

export function GameInterface({ onCatch, tokens }: GameInterfaceProps) {
  const [showWildPokemon, setShowWildPokemon] = useState(false);
  const [showBattleText, setShowBattleText] = useState(false);
  const [battleText, setBattleText] = useState('');
  const [throwing, setThrowing] = useState(false);
  const [catchAnimation, setCatchAnimation] = useState(false);

  const startBattle = async () => {
    if (tokens < 10) return;
    
    setShowWildPokemon(false);
    setShowBattleText(false);
    setBattleText('');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowWildPokemon(true);
    
    setBattleText('A wild Suimander appeared!');
    setShowBattleText(true);
  };

  const throwBall = async () => {
    setThrowing(true);
    setBattleText('Throwing SuiBall...');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCatchAnimation(true);
    setBattleText('Almost there...');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    onCatch();
    
    setThrowing(false);
    setCatchAnimation(false);
    setShowWildPokemon(false);
    setShowBattleText(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[3/2] rounded-lg overflow-hidden">
      {/* Battle background with Sui-themed styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600">
        <div className="absolute inset-0 battle-scene opacity-20" />
      </div>
      
      {/* Wild Pokemon */}
      {showWildPokemon && (
        <div className={`absolute top-1/4 right-1/4 transition-all duration-500 
          ${showWildPokemon ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          ${catchAnimation ? 'animate-shake' : 'animate-float'}`}
        >
          <PokemonSprite evolution="suimander" />
        </div>
      )}

      {/* Throwing animation */}
      {throwing && (
        <div className={`absolute left-1/4 bottom-1/4 transition-all duration-1000 
          ${throwing ? 'translate-x-full translate-y-[-50%]' : ''}`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 
            shadow-lg animate-spin border-2 border-white">
          </div>
        </div>
      )}

      {/* Battle text box */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r 
        from-blue-900/90 to-cyan-900/90 p-4 rounded-t-lg backdrop-blur-sm
        border-t border-white/20 transform transition-transform duration-300 
        ${showBattleText ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <p className="text-white font-pixel text-shadow">{battleText}</p>
      </div>

      {/* Battle controls */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
        {!showWildPokemon ? (
          <button
            onClick={startBattle}
            disabled={tokens < 10}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 
              hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 
              disabled:to-gray-600 text-white font-pixel py-3 px-6 rounded-lg 
              transition-all transform hover:-translate-y-0.5 active:translate-y-0
              shadow-lg disabled:shadow-none"
          >
            Find Wild Suimander (10 tokens)
          </button>
        ) : (
          <button
            onClick={throwBall}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 
              hover:from-cyan-600 hover:to-blue-600 text-white font-pixel 
              py-3 px-6 rounded-lg transition-all transform 
              hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Throw SuiBall!
          </button>
        )}
      </div>
    </div>
  );
}