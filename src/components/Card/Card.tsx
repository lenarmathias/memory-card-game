import { useState } from 'react';
import { GameCard } from './Card.styles';
import type { PlayableCard } from '../../game/useGame';

type CardProps = {
  card: PlayableCard;
  gameStarted: boolean;
};

function Card({ card, gameStarted }: CardProps) {
  const [isFaceDown, setIsFaceDown] = useState(gameStarted);

  return (
    <GameCard
      $backCover={isFaceDown}
      disabled={!isFaceDown}
      onClick={() => setIsFaceDown(previous => !previous)}
    >
      {isFaceDown ? null : card.data.icon}
    </GameCard>
  );
}

export default Card;
