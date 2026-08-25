import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import {
  Button,
  StyledNavLink
} from '../../components/Button';
import { LanguageIcon } from './Settings.styles';
import enIcon from '../../assets/en.svg';
import plIcon from '../../assets/pl.svg';
import type { Translation } from '../../locales';
import type { SetLanguage } from '../../locales/useTranslation';

type SettingsProps = {
  text: Translation;
  setLanguage: SetLanguage;
};

function Settings({ text, setLanguage }: SettingsProps) {
  return (
    <main>
      <Container $flex $flexColumn>
        <Title>{text.settings.title}</Title>
        <Container $flex $noPadding>
          <Button onClick={() => setLanguage("en")}>
            <LanguageIcon
              src={enIcon}
              alt={text.settings.englishButton}
            />
          </Button>
          <Button onClick={() => setLanguage("pl")}>
            <LanguageIcon
              src={plIcon}
              alt={text.settings.polishButton}
            />
          </Button>
        </Container>
        <StyledNavLink to='/home'>
          {text.settings.backButton}
        </StyledNavLink>
      </Container>
    </main >
  );
}

export default Settings;
