import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import { useLocalSettings } from './useLocalSettings';
import { useTranslation } from './locales/useTranslation';

function App() {
  const {
    settings,
    setSettings
  } = useLocalSettings();

  const {
    text,
    setLanguage
  } = useTranslation(
    settings,
    setSettings
  );

  return (
    <Routes>
      <Route
        path='/settings'
        element={
          <Settings
            text={text}
            setLanguage={setLanguage}
          />
        }
      />

      <Route
        path='/home'
        element={<Home text={text} />}
      />

      <Route
        path='/'
        element={<Navigate to='/home' replace />}
      />
    </Routes>
  );
}

export default App;
