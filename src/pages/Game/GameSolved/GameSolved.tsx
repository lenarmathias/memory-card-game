import { Container } from '../../../components/Container';
import { Title } from '../../../components/Title';
import { Text } from '../../../components/Text';
import { Button, StyledNavLink } from '../../../components/Button';
import type { Translation } from '../../../locales';

type GameSolvedProps = {
  text: Translation;
  wrongCounter: number;
  restartGame: () => void;
  changeDifficulty: () => void;
  previousBestScore: number | null;
};

function GameSolved({
  text,
  wrongCounter,
  restartGame,
  changeDifficulty,
  previousBestScore
}: GameSolvedProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Title>
          {text.game.solvedTitle}
        </Title>
        <Text>
          {previousBestScore === null ||
            wrongCounter < previousBestScore
            ? text.game.newBestScore
            : text.game.wrongCounterLong
          }{wrongCounter}
        </Text>
        {previousBestScore !== null && (
          <Text>
            {wrongCounter < previousBestScore
              ? text.game.previousBestScore
              : text.game.bestScore
            }{previousBestScore}
          </Text>
        )}
        <Container $flex>
          <Button onClick={restartGame}>
            {text.game.restartButton}
          </Button>
          <Button onClick={changeDifficulty}>
            {text.game.changeDifficultyButton}
          </Button>
          <StyledNavLink to='/home'>
            {text.shared.backButton}
          </StyledNavLink>
        </Container>
      </Container>
    </main>
  );
}

export default GameSolved;
