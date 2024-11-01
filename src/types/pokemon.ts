export interface Pokemon {
  name: string;
  level: number;
  evolution: 'suimander' | 'suimeleon' | 'suizard';
  power: number;
  imageUrl: string;
}

export interface GameState {
  balance: number;
  tokens: number;
  pokemon: Pokemon[];
}