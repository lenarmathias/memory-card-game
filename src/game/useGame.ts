import { useState, useEffect, useRef } from 'react';
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

const generateDeck = () => {
  const doubledDeck = deck.flatMap(card => [
    { key: nanoid(), data: card },
    { key: nanoid(), data: card }
  ]);

  return shuffleDeck(doubledDeck);
};

export const useGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSolved, setGameSolved] = useState(false);
  const [selectedCards, setSelectedCards] = useState<PlayableCard[]>([]);
  const [solvedCards, setSolvedCards] = useState<number[]>([]);
  const [wrongCards, setWrongCards] = useState<string[]>([]);
  const [blockCards, setBlockCards] = useState(false);
  const [readyDeck, setReadyDeck] = useState(generateDeck);
  const timeoutRef = useRef<number | null>(null);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const restartGame = () => {
    setGameStarted(false);
    setGameSolved(false);
    setSolvedCards([]);
    setReadyDeck(generateDeck());
  };

  const selectCard = (card: PlayableCard) => {
    setSelectedCards(previous => [
      ...previous,
      card
    ]);

    if (selectedCards.length === 1) {
      if (selectedCards[0].data.id === card.data.id) {
        setSolvedCards(previous => [
          ...previous,
          card.data.id
        ]);

        if (deck.length === solvedCards.length + 1) {
          setGameSolved(true);
        }
      } else {
        setWrongCards([selectedCards[0].key, card.key]);
        setBlockCards(true);

        timeoutRef.current = setTimeout(() => {
          setWrongCards([]);
          setBlockCards(false);
          timeoutRef.current = null;
        }, 1000);
      }

      setSelectedCards([]);
    }
  };

  return {
    readyDeck,
    setGameStarted,
    gameStarted,
    selectCard,
    solvedCards,
    wrongCards,
    blockCards,
    gameSolved,
    restartGame
  };
};
