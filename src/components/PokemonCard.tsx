import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Pokemon } from '../types/pokemon';
import { PokemonSprite } from './PokemonSprite';

interface PokemonCardProps {
  pokemon: Pokemon;
  onEvolve: (pokemon: Pokemon) => void;
  onTrade: (pokemon: Pokemon) => void;
  canEvolve: boolean;
}

export function PokemonCard({ pokemon, onEvolve, onTrade, canEvolve }: PokemonCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-4 
      backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all 
      transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-shadow">{pokemon.name}</h3>
        <span className="text-sm bg-gradient-to-r from-blue-500/50 to-cyan-500/50 
          px-2 py-1 rounded font-pixel">
          Power: {pokemon.power}
        </span>
      </div>
      
      <div className="relative aspect-square mb-4 bg-gradient-to-br 
        from-blue-400/20 to-cyan-400/20 rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 
          to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <PokemonSprite 
          evolution={pokemon.evolution}
          className="transform hover:scale-110 transition-transform"
        />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm bg-gradient-to-r from-cyan-500/50 
          to-blue-500/50 px-2 py-1 rounded-full font-pixel">
          {pokemon.evolution}
        </span>
        {pokemon.evolution !== 'suizard' && (
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
        )}
      </div>

      {pokemon.evolution === 'suizard' ? (
        <button
          onClick={() => onTrade(pokemon)}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 
            hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg 
            transition-all transform hover:-translate-y-0.5 
            active:translate-y-0 font-pixel text-shadow"
        >
          Trade for 100 SUI
        </button>
      ) : (
        <button
          onClick={() => onEvolve(pokemon)}
          disabled={!canEvolve}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 
            disabled:to-gray-600 px-4 py-2 rounded-lg transition-all 
            transform hover:-translate-y-0.5 active:translate-y-0 
            font-pixel text-shadow"
        >
          Evolve (50 tokens)
        </button>
      )}
    </div>
  );
}