import React from 'react';
import MovieCard from './MovieCard';

import { LocalMovies, Stars } from '@material-ui/icons';

import './MovieList.css';

const MovieList = ({ variant, query, movieList, nominations, setNominations }) => {

    return (
        <>
        {variant === "Results" ?
        // Renders the query results list if the variant is "Results"

        <section className="results">
            {query.length > 0 ?
            <>
                <h2>Showing results for <span className="green-text">{query}</span></h2>
                <div className="results-list">
                    {movieList && movieList.length > 0
                    ? movieList.map((movie) => {
                        return (
                            <MovieCard 
                                key = {movie.imdbID}
                                variant = "Result"
                                movie = {movie} 
                                nominations = {nominations}
                                setNominations = {setNominations}/>
                        );
                    })
                    : <div>No results to display.</div>}
                </div>
            </>
            : <div className="cta">
                <LocalMovies />
                <h2>Find your favorite movies</h2>
            </div>
            }


            
        </section>

        : variant === "Nominations" ?
        // Otherwise, renders the nominations if the variant is "Nominations"

        <section className="nominations">
            {nominations.length > 0 ?
            <>
                <h2>My Nominations</h2>
                <div className="nomination-list">
                    {nominations.map((movie) => {
                        return (
                            <MovieCard 
                                key = {movie.imdbID}
                                variant = "Nomination"
                                movie = {movie} 
                                nominations = {nominations}
                                setNominations = {setNominations}/>
                        );
                    })}
                </div>
            </>
            : <div className="cta">
                <Stars />
                <h2>Nominate your Top 5!</h2>
            </div>
            }
        </section>
        : ''
        }
        </>
    );
};

export default MovieList;