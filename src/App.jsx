import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} />
      </Routes>
      <h1>React Redux - Redux Toolkit</h1>
    </BrowserRouter>
  );
};

export default App;
