import { useState } from 'react';
import './App.css';
import { 
  Search,
  ResultsList } from './components';

const App = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <div id="App">

      <header>
        <h1>The Shoppies</h1>
      </header>

      <Search 
        setMovieList = {setMovieList} />

      <ResultsList 
        movieList = {movieList} />
    </div>
  );
};

export default App;
