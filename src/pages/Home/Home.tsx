import { Container } from '../../components/Container';
import { Title } from './Home.styles';
import type { Translation } from '../../locales';

type HomeProps = {
  text: Translation;
};

function Home({ text }: HomeProps) {
  return (
    <main>
      <Container>
        <Title>{text.home.title}</Title>
      </Container>
    </main>
  );
}

export default Home;
