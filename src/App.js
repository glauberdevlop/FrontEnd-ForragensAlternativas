import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Catalog from './page/Catalog/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
