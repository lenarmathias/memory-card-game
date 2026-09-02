import { useState, useRef, useEffect } from 'react';
import { GameCard } from './Card.styles';
import type { PlayableCard } from '../../game/useGame';

type CardProps = {
  card: PlayableCard;
  gameStarted: boolean;
  selectCard: (card: PlayableCard) => void;
  solvedCards: number[];
  wrongCards: string[];
  blockCards: boolean;
};

function Card({
  card,
  gameStarted,
  selectCard,
  solvedCards,
  wrongCards,
  blockCards
}: CardProps) {
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

  const cardClick = (card: PlayableCard) => {
    setIsFaceDown(previous => !previous);
    selectCard(card);
  };

  return (
    <GameCard
      $backCover={isFaceDown}
      $solved={solved}
      $wrong={wrong}
      disabled={!isFaceDown || blockCards}
      onClick={() => cardClick(card)}
    >
      {isFaceDown ? null : card.data.icon}
    </GameCard>
  );
}

export default Card;
