import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { GameInterface } from './components/GameInterface';
import { PokemonCard } from './components/PokemonCard';
import { EvolutionModal } from './components/EvolutionModal';
import { NotificationToast } from './components/NotificationToast';
import { GameStats } from './components/GameStats';
import { TokenPurchaseModal } from './components/TokenPurchaseModal';
import type { Pokemon } from './types/pokemon';

interface Notification {
  type: 'success' | 'error' | 'info';
  message: string;
}

function App() {
  const [balance, setBalance] = useState(1000);
  const [tokens, setTokens] = useState(100);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [showEvolutionModal, setShowEvolutionModal] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [stats, setStats] = useState({ caught: 0, evolved: 0, traded: 0 });

  const showNotification = useCallback((type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
  }, []);

  const purchaseTokens = (amount: number, cost: number) => {
    if (balance >= cost) {
      setBalance(prev => prev - cost);
      setTokens(prev => prev + amount);
      showNotification('success', `Purchased ${amount} tokens!`);
      setShowTokenModal(false);
    } else {
      showNotification('error', 'Insufficient SUI balance!');
    }
  };

  const catchSuimander = () => {
    if (tokens >= 10) {
      const chance = Math.random();
      if (chance > 0.5) {
        const newPokemon = {
          name: `Suimander #${pokemon.length + 1}`,
          level: 1,
          evolution: 'suimander' as const,
          power: Math.floor(Math.random() * 100) + 50,
          imageUrl: '/images/suimander.png'
        };
        setPokemon([...pokemon, newPokemon]);
        setStats(prev => ({ ...prev, caught: prev.caught + 1 }));
        showNotification('success', `Caught ${newPokemon.name} with power ${newPokemon.power}!`);
      } else {
        showNotification('error', 'Failed to catch Suimander! Try again.');
      }
      setTokens(prev => prev - 10);
    } else {
      setShowTokenModal(true);
    }
  };

  const evolve = (pokemon: Pokemon) => {
    if (tokens >= 50) {
      const chance = Math.random();
      if (chance > 0.7) {
        const evolution = pokemon.evolution === 'suimander' ? 'suimeleon' : 'suizard';
        const newImageUrl = evolution === 'suimeleon' 
          ? '/images/suimeleon.png'
          : '/images/suizard.png';
        
        setPokemon(prev => prev.map(p => 
          p === pokemon ? {...p, evolution, power: p.power * 2, imageUrl: newImageUrl} : p
        ));
        setStats(prev => ({ ...prev, evolved: prev.evolved + 1 }));
        showNotification('success', `${pokemon.name} evolved into ${evolution}!`);
      } else {
        showNotification('error', 'Evolution failed! Try again.');
      }
      setTokens(prev => prev - 50);
    } else {
      setShowTokenModal(true);
    }
  };

  const tradeSuizard = (pokemon: Pokemon) => {
    if (pokemon.evolution === 'suizard') {
      setBalance(prev => prev + 100);
      setPokemon(prev => prev.filter(p => p !== pokemon));
      setStats(prev => ({ ...prev, traded: prev.traded + 1 }));
      showNotification('success', `Traded ${pokemon.name} for 100 SUI!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
      <Navbar 
        balance={balance} 
        tokens={tokens} 
        onBuyTokens={() => setShowTokenModal(true)} 
      />

      <main className="container mx-auto px-4 py-8">
        <GameStats 
          totalCaught={stats.caught}
          totalEvolved={stats.evolved}
          totalTraded={stats.traded}
        />

        <div className="mt-8">
          <GameInterface 
            onCatch={catchSuimander}
            tokens={tokens}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pokemon.map((p, i) => (
            <PokemonCard
              key={i}
              pokemon={p}
              onEvolve={evolve}
              onTrade={tradeSuizard}
              canEvolve={tokens >= 50}
            />
          ))}
        </div>
      </main>

      <TokenPurchaseModal
        isOpen={showTokenModal}
        onClose={() => setShowTokenModal(false)}
        onPurchase={purchaseTokens}
        balance={balance}
      />

      {showEvolutionModal && (
        <EvolutionModal
          pokemon={pokemon}
          onSelect={(p) => {
            evolve(p);
            setShowEvolutionModal(false);
          }}
          onClose={() => setShowEvolutionModal(false)}
        />
      )}

      {notification && (
        <NotificationToast
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;