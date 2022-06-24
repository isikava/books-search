import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Books } from './pages/Books';
import { Book } from './pages/Book';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/:id' element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
