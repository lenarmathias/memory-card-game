import { Container } from '../../components/Container';
import { StyledNavLink } from '../../components/Button';
import { GameArea } from './Game.styles';
import { useGame } from '../../game/useGame';
import Card from '../../components/Card/Card';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  const readyDeck = useGame();

  return (
    <main>
      <Container $flex $flexColumn>
        <GameArea>
          {readyDeck.map(card => (
            <Card
              key={card.key}
              card={card}
            />
          ))}
        </GameArea>
        <StyledNavLink to='/home'>
          {text.shared.backButton}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default Game;
