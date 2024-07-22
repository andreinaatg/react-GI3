import './App.css';
// import Counter from './components/counter/counter';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieFinder from './components/movie/movie';
import MovieDetail from './components/movie/movieDetails';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<MovieFinder />} />
                  <Route path="/movie/:id" element={<MovieDetail />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;