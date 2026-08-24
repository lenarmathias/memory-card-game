import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import { StyledNavLink } from '../../components/Button';
import type { Translation } from '../../locales';

type SettingsProps = {
  text: Translation;
};

function Settings({ text }: SettingsProps) {
  return (
    <main>
      <Container $flexColumn>
        <Title>{text.settings.title}</Title>
        <StyledNavLink to='/home'>
          {text.settings.backButton}
        </StyledNavLink>
      </Container>
    </main>
  );
}

export default Settings;
