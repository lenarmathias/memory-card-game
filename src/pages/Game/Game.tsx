import { useGame } from '../../game/useGame';
import { Container } from '../../components/Container';
import { GameArea } from './Game.styles';
import Card from '../../components/Card/Card';
import { Title } from '../../components/Title';
import { Button, StyledNavLink } from '../../components/Button';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  const {
    readyDeck,
    setGameStarted,
    gameStarted,
    selectCard,
    solvedCards,
    wrongCards,
    blockCards,
    gameSolved,
    restartGame
  } = useGame();

  return (
    gameSolved ? (
      <main>
        <Container $flex $flexColumn>
          <Title>
            {text.game.solvedTitle}
          </Title>
          <Container $flex>
            <Button onClick={restartGame}>
              {text.game.restartButton}
            </Button>
            <StyledNavLink to='/home'>
              {text.shared.backButton}
            </StyledNavLink>
          </Container>
        </Container>
      </main>
    ) : (
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
            <Button onClick={() => setGameStarted(true)}>
              {text.game.startButton}
            </Button>
          )}
        </Container>
      </main>
    )
  );
}

export default Game;
