import { useState } from 'react';
import './App.css';
import { 
  Search,
  MovieList } from './components';

const App = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [nominations, setNominations] = useState([]);

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
        <MovieList 
          variant = "Results"
          query = {query}
          movieList = {movieList}
          nominations = {nominations}
          setNominations = {setNominations}
           />
        
        <MovieList 
          variant = "Nominations"
          nominations = {nominations}
          setNominations = {setNominations} />

      </div>
    </div>
  );
};

export default App;
