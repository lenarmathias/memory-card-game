import { Container } from '../../components/Container';
import { StyledNavLink } from '../../components/Button';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <StyledNavLink to='/home'>
          {text.shared.backButton}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default Game;
