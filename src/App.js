import { useEffect, useState } from 'react';
import { 
  Search,
  MovieList, 
  ConfirmModal} from './components';

import { 
  getNominationsFromLocal,
  setNominationsOnLocal} from './utils';

import './App.css';

const App = () => {

  // Amend state hook function to set state and set local storage
  const setNominations = (nominations) => {
    setNominationsOnLocal(nominations);
    _setNominations(nominations);
  };

  // If nominations exist in local storage, retrieve them and set state
  useEffect(() => {
    if(getNominationsFromLocal()) {
      _setNominations(getNominationsFromLocal());
    };
  }, []);

  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [nominations, _setNominations] = useState([]);

  return (
    <div id="App">

      <header>
        <span className="dark-green-text">The</span>
        <h1>Shoppies</h1>
      </header>

      <main>
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

        {nominations.length === 5 ?
        <ConfirmModal
          nominations = {nominations}
          setNominations = {setNominations}
          setMovieList = {setMovieList}
          setQuery = {setQuery} />
        : ''
        }
      </main>
      
    </div>
  );
};

export default App;
