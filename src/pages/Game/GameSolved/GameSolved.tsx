import { Container } from '../../../components/Container';
import { Title } from '../../../components/Title';
import { Text } from '../../../components/Text';
import { Button, StyledNavLink } from '../../../components/Button';
import type { Translation } from '../../../locales';

type GameSolvedProps = {
  text: Translation;
  wrongCounter: number;
  restartGame: () => void;
};

function GameSolved({
  text,
  wrongCounter,
  restartGame
}: GameSolvedProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Title>
          {text.game.solvedTitle}
        </Title>
        <Text>
          {text.game.wrongCounterLong}{wrongCounter}
        </Text>
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
  );
}

export default GameSolved;
