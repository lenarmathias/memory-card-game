import { deck, type CardData } from './cards';
import { nanoid } from 'nanoid';

export type PlayableCard = {
  key: string;
  data: CardData;
};

export const useGame = () => {
  const doubledDeck = deck.flatMap(card => [
    { key: nanoid(), data: card },
    { key: nanoid(), data: card }
  ]);

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

  const readyDeck = shuffleDeck(doubledDeck);

  return readyDeck;
};
