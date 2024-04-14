import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import Blogspage from '@/pages/Blogspage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<Blogspage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
