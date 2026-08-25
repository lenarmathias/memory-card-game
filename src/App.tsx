import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import { useTranslation } from './locales/useTranslation';

function App() {
  const {
    text,
    setLanguage
  } = useTranslation();

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
