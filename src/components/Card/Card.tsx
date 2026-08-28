import { GameCard } from './Card.styles';
import type { PlayableCard } from '../../game/useGame';

type CardProps = {
  card: PlayableCard;
};

function Card({ card }: CardProps) {
  return (
    <GameCard>
      {card.data.icon}
    </GameCard>
  );
}

export default Card;
