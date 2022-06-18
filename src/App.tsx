import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<MoviePage />} />
    </Routes>
  );
}

export default App;
