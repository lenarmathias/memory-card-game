import { GameCard } from './Card.styles';
import type { CardData } from '../../game/cards';

type CardProps = {
  card: CardData;
};

function Card({ card }: CardProps) {
  return (
    <GameCard>
      {card.icon}
    </GameCard>
  );
}

export default Card;
