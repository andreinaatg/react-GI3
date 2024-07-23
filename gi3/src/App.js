import './App.css';
// import Counter from './components/counter/counter';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieFinder from './components/movie/movie';
// import MovieDetail from './components/movie/movieDetails';
import Home from './home';
function App() {
  return (
    // <>
    
    // <Counter/>
    // </>
    //   <Router>
    //       <div className="App">
    //           <Routes>
    //               <Route path="/" element={<MovieFinder />} />
    //               <Route path="/movie/:id" element={<MovieDetail />} />
    //           </Routes>
    //       </div>
    //   </Router>
    <div className="App">
    <Router>
    <nav>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </nav>
    </Router>
  </div>
  );
}

export default App;