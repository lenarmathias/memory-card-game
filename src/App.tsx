import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/home'
        element={<div />}
      />

      <Route
        path='/'
        element={<Navigate to='/home' replace />}
      />
    </Routes>
  );
}

export default App;
