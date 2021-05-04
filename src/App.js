import { useState } from 'react';
import './App.css';
import { 
  Search,
  ResultsList } from './components';

const App = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  return (
    <div id="App">

      <header>
        <h1>The Shoppies</h1>
      </header>

      <Search 
        query = {query}
        setQuery = {setQuery}
        setMovieList = {setMovieList} />

      <div className="lists-container">
        <ResultsList 
          query = {query}
          movieList = {movieList} />

      </div>
    </div>
  );
};

export default App;
