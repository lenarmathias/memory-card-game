import { GameArea } from './GameBoard.styles';
import { Container } from '../../../components/Container';
import { Button, StyledNavLink } from '../../../components/Button';
import { Text } from '../../../components/Text';
import Card from '../../../components/Card/Card';
import type { Translation } from '../../../locales';
import type { PlayableCard } from '../../../game/useGame';

type GameBoardProps = {
  text: Translation;
  gameStarted: boolean;
  wrongCounter: number;
  readyDeck: PlayableCard[];
  selectCard: (card: PlayableCard) => void;
  solvedCards: number[];
  wrongCards: string[];
  blockCards: boolean;
  setGameStarted: (started: boolean) => void;
};

function GameBoard({
  text,
  gameStarted,
  wrongCounter,
  readyDeck,
  selectCard,
  solvedCards,
  wrongCards,
  blockCards,
  setGameStarted
}: GameBoardProps) {
  return (
    <main>
      <StyledNavLink to='/home' $topLeft>
        {text.shared.backButton}
      </StyledNavLink>
      {gameStarted && (
        <Text $topGame>
          {text.game.wrongCounterShort}{wrongCounter}
        </Text>
      )}
      <Container $flex $flexColumn>
        <GameArea>
          {readyDeck.map(card => (
            <Card
              key={`${card.key}-${gameStarted}`}  // Reset card state
              card={card}
              gameStarted={gameStarted}
              selectCard={selectCard}
              solvedCards={solvedCards}
              wrongCards={wrongCards}
              blockCards={blockCards}
            />
          ))}
        </GameArea>
        {!gameStarted && (
          <Button onClick={() => setGameStarted(true)}>
            {text.game.startButton}
          </Button>
        )}
      </Container>
    </main>
  );
}

export default GameBoard;
