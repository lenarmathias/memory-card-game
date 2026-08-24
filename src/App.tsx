import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import { translation } from './locales';

function App() {
  return (
    <Routes>
      <Route
        path='/settings'
        element={<Settings text={translation.en} />}
      />

      <Route
        path='/home'
        element={<Home text={translation.en} />}
      />

      <Route
        path='/'
        element={<Navigate to='/home' replace />}
      />
    </Routes>
  );
}

export default App;
