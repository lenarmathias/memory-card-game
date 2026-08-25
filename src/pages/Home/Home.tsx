import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import { StyledNavLink } from '../../components/Button';
import type { Translation } from '../../locales';

type HomeProps = {
  text: Translation;
};

function Home({ text }: HomeProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Title>{text.home.title}</Title>
        <StyledNavLink to='/settings'>
          {text.home.buttonSettings}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default Home;
