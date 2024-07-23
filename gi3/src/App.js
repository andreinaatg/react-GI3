import './App.css';
import Counter from './pages/counter/counter';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieFinder from './pages/movie/movie';
import MovieDetail from './pages/movie/movieDetails';
import Todo from './todo';
import Navbar from './components/Nav';
function App() {
  return (
    <>
      <Router>
          <div className="App">
            <Navbar/>
              <Routes>
                <Route path="/counter"  index element={<Counter />}/>
                <Route path="/todoList" element={<Todo />}/>
                <Route path="/movieFinder" element={<MovieFinder />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
              </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;