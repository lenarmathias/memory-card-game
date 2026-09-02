import { GameCard } from './Card.styles';
import { useCard } from './useCard';
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
  const {
    isFaceDown,
    solved,
    wrong,
    cardClick
  } = useCard(
    card,
    gameStarted,
    selectCard,
    solvedCards,
    wrongCards
  );

  return (
    <GameCard
      $backCover={isFaceDown}
      $solved={solved}
      $wrong={wrong}
      disabled={!isFaceDown || blockCards}
      onClick={cardClick}
    >
      {isFaceDown ? null : card.data.icon}
    </GameCard>
  );
}

export default Card;
