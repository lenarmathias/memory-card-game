import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home/Home';
import { translation } from './locales';

function App() {
  return (
    <Routes>
      <Route
        path='/home'
        element={<Home text={translation} />}
      />

      <Route
        path='/'
        element={<Navigate to='/home' replace />}
      />
    </Routes>
  );
}

export default App;
