import { Container } from '../../../components/Container';
import { Title } from '../../../components/Title';
import { Button, StyledNavLink } from '../../../components/Button';
import type { Translation } from '../../../locales';
import type { Difficulty } from '../../../game/useGame';

type GameDifficultyProps = {
  text: Translation;
  selectDifficulty: (difficulty: Difficulty) => void;
};

function GameDifficulty({
  text,
  selectDifficulty
}: GameDifficultyProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Title>
          {text.game.difficultyTitle}
        </Title>
        <Button
          onClick={() => selectDifficulty("easy")}
        >
          {text.game.easyDifficulty}
        </Button>
        <Button
          onClick={() => selectDifficulty("medium")}
        >
          {text.game.mediumDifficulty}
        </Button>
        <Button
          onClick={() => selectDifficulty("hard")}
        >
          {text.game.hardDifficulty}
        </Button>
        <StyledNavLink to='/home'>
          {text.shared.backButton}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default GameDifficulty;
