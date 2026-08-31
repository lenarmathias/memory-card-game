import { useState } from 'react';
import { deck, type CardData } from './cards';
import { nanoid } from 'nanoid';

export type PlayableCard = {
  key: string;
  data: CardData;
};

const shuffleDeck = (deck: PlayableCard[]) => {
  const shuffledDeck = [...deck];

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [
      shuffledDeck[j],
      shuffledDeck[i]
    ];
  }

  return shuffledDeck;
};

export const useGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [readyDeck] = useState(() => {
    const doubledDeck = deck.flatMap(card => [
      { key: nanoid(), data: card },
      { key: nanoid(), data: card }
    ]);

    const shuffledDeck = shuffleDeck(doubledDeck);

    return shuffledDeck;
  });

  const startGame = () => {
    setGameStarted(true);
  };

  return { readyDeck, startGame, gameStarted };
};
