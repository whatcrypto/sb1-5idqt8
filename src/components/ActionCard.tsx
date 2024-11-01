import React from 'react';

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  onClick: () => void;
  disabled?: boolean;
}

export function ActionCard({ 
  title, 
  description, 
  buttonText, 
  buttonColor, 
  onClick, 
  disabled 
}: ActionCardProps) {
  return (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="mb-6 text-white/80">{description}</p>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${buttonColor} hover:opacity-90 disabled:bg-gray-500 px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full`}
      >
        {buttonText}
      </button>
    </div>
  );
}