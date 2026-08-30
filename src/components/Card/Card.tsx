import { useState } from 'react';
import { GameCard } from './Card.styles';
import type { PlayableCard } from '../../game/useGame';

type CardProps = {
  card: PlayableCard;
};

function Card({ card }: CardProps) {
  const [isFaceDown, setIsFaceDown] = useState(false);

  return (
    <GameCard
      $backCover={isFaceDown}
      onClick={() => setIsFaceDown(previous => !previous)}
    >
      {isFaceDown ? null : card.data.icon}
    </GameCard>
  );
}

export default Card;
