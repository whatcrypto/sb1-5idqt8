import React from 'react';
import { Pokemon } from '../types/pokemon';

interface EvolutionModalProps {
  pokemon: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
  onClose: () => void;
}

export function EvolutionModal({ pokemon, onSelect, onClose }: EvolutionModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Choose Pokemon to Evolve</h2>
        <div className="space-y-2">
          {pokemon
            .filter(p => p.evolution !== 'suizard')
            .map((p, i) => (
              <button
                key={i}
                onClick={() => onSelect(p)}
                className="w-full bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition flex items-center justify-between"
              >
                <span>{p.name}</span>
                <span>{p.evolution}</span>
              </button>
            ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}