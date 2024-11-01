import React from 'react';
import { X } from 'lucide-react';

interface TokenBundle {
  tokens: number;
  cost: number;
}

interface TokenPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (tokens: number, cost: number) => void;
  balance: number;
}

const TOKEN_BUNDLES: TokenBundle[] = [
  { tokens: 100, cost: 10 },
  { tokens: 500, cost: 45 },
  { tokens: 1000, cost: 80 }
];

export function TokenPurchaseModal({ isOpen, onClose, onPurchase, balance }: TokenPurchaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Get More Tokens</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {TOKEN_BUNDLES.map((bundle, i) => (
            <button
              key={i}
              onClick={() => onPurchase(bundle.tokens, bundle.cost)}
              disabled={balance < bundle.cost}
              className="w-full bg-blue-600/80 hover:bg-blue-600 disabled:bg-gray-600 backdrop-blur-sm border border-white/10 rounded-lg p-4 transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{bundle.tokens} Tokens</span>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full">
                  {bundle.cost} SUI
                </span>
              </div>
              {bundle.tokens >= 500 && (
                <div className="mt-2 text-sm text-emerald-400">
                  {bundle.tokens >= 1000 ? 'Best value!' : 'Save 10%'}
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-white/60 text-center">
          Your balance: {balance} SUI
        </div>
      </div>
    </div>
  );
}