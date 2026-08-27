import { Container } from '../../components/Container';
import { StyledNavLink } from '../../components/Button';
import { deck } from '../../game/cards';
import Card from '../../components/Card/Card';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Container $flex>
          {deck.map(card => (
            <Card
              key={card.id}
              card={card}
            />
          ))}
        </Container>
        <StyledNavLink to='/home'>
          {text.shared.backButton}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default Game;
