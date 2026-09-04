import { useState, useEffect, useRef } from 'react';
import {
  easyDeck,
  mediumDeck,
  hardDeck,
  type CardData
} from './cards';
import { nanoid } from 'nanoid';

export type PlayableCard = {
  key: string;
  data: CardData;
};

export type Difficulty = "easy" | "medium" | "hard";

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

const generateDeck = (gameDifficulty: Difficulty) => {
  let deck: CardData[] = [];

  switch (gameDifficulty) {
    case "easy":
      deck = easyDeck;
      break;

    case "medium":
      deck = easyDeck.concat(mediumDeck);
      break;

    case "hard":
      deck = easyDeck.concat(mediumDeck, hardDeck);
      break;
  }

  const doubledDeck = deck.flatMap(card => [
    { key: nanoid(), data: card },
    { key: nanoid(), data: card }
  ]);

  return shuffleDeck(doubledDeck);
};

export const useGame = () => {
  const [gameDifficulty, setGameDifficulty] = useState<Difficulty | "">("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSolved, setGameSolved] = useState(false);
  const [selectedCards, setSelectedCards] = useState<PlayableCard[]>([]);
  const [solvedCards, setSolvedCards] = useState<number[]>([]);
  const [wrongCards, setWrongCards] = useState<string[]>([]);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [blockCards, setBlockCards] = useState(false);
  const [readyDeck, setReadyDeck] = useState<PlayableCard[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const totalPairs = readyDeck.length / 2;

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
    setWrongCounter(0);

    if (gameDifficulty !== "") {
      setReadyDeck(generateDeck(gameDifficulty));
    }
  };

  const selectDifficulty = (difficulty: Difficulty) => {
    setGameDifficulty(difficulty);
    setReadyDeck(generateDeck(difficulty));
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

        if (totalPairs === solvedCards.length + 1) {
          setGameSolved(true);
        }
      } else {
        setWrongCards([selectedCards[0].key, card.key]);
        setBlockCards(true);
        setWrongCounter(previous => previous + 1);

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
    restartGame,
    gameDifficulty,
    selectDifficulty,
    wrongCounter
  };
};
