import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Book, Books } from './pages';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/:id' element={<Book />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
