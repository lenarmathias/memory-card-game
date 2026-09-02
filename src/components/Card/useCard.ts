import { useState, useRef, useEffect } from 'react';
import type { PlayableCard } from '../../game/useGame';

export const useCard = (
  card: PlayableCard,
  gameStarted: boolean,
  selectCard: (card: PlayableCard) => void,
  solvedCards: number[],
  wrongCards: string[]
) => {
  const [isFaceDown, setIsFaceDown] = useState(gameStarted);
  const solved = solvedCards.includes(card.data.id);
  const wrong = wrongCards.includes(card.key);
  const wasWrong = useRef(false);

  useEffect(() => {
    if (wrong) {
      wasWrong.current = true;
      return;
    }

    if (wasWrong.current) {
      setIsFaceDown(true);
      wasWrong.current = false;
    }
  }, [wrong]);

  const cardClick = () => {
    setIsFaceDown(previous => !previous);
    selectCard(card);
  };

  return {
    isFaceDown,
    solved,
    wrong,
    cardClick
  };
};
