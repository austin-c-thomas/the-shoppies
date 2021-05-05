import 
{ 
  // useEffect, 
  useState } from 'react';
import './App.css';
import { 
  Search,
  MovieList, 
  ConfirmModal} from './components';

// import { 
//   getMovieListFromLocal,
//   getNominationsFromLocal,
//   getQueryFromLocal,
//   setMovieListOnLocal, 
//   setNominationsOnLocal, 
//   setQueryOnLocal } from './utils';

const App = () => {

  // Amend state hook functions to set state and set local storage
  // const setQuery = (query) => {
  //   setQueryOnLocal(query);
  //   _setQuery(query);
  // };

  // const setMovieList = (movieList) => {
  //   setMovieListOnLocal(movieList);
  //   _setMovieList(movieList);
  // };

  // const setNominations = (nominations) => {
  //   setNominationsOnLocal(nominations);
  //   _setNominations(nominations);
  // };

  // If data exists in local storage, retrieve it and set state
  // useEffect(() => {
  //   if (getQueryFromLocal()) {
  //     _setQuery(getQueryFromLocal());
  //   };
    
  //   if (getMovieListFromLocal()) {
  //     _setMovieList(getMovieListFromLocal());
  //   };

  //   if(getNominationsFromLocal()) {
  //     _setNominations(getNominationsFromLocal());
  //   };
  // }, []);

  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [nominations, setNominations] = useState([]);

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
          setNominations = {setNominations} />
        : ''
        }
      </main>
      
    </div>
  );
};

export default App;
