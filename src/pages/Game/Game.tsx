import { useGame } from '../../game/useGame';
import { Container } from '../../components/Container';
import { GameArea } from './Game.styles';
import Card from '../../components/Card/Card';
import { Button, StyledNavLink } from '../../components/Button';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  const {
    readyDeck,
    startGame,
    gameStarted,
    selectCard,
    solvedCards,
    wrongCards,
    blockCards
  } = useGame();

  return (
    <main>
      <StyledNavLink to='/home' $topLeft>
        {text.shared.backButton}
      </StyledNavLink>
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
          <Button onClick={startGame}>
            {text.game.startButton}
          </Button>
        )}
      </Container>
    </main>
  );
}

export default Game;
