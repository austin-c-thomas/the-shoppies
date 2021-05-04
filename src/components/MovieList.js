import React from 'react';
import MovieCard from './MovieCard';

import './MovieList.css';

const MovieList = ({ variant, query, movieList, nominations, setNominations }) => {


    return (
        <>
        {variant === "Results" ?
        // Renders the query results list if the variant is "Results"

        <section className="results">
            <h3>Results for "{query}"</h3>
            <div className="results-list">
                {movieList.length > 0
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
        </section>

        : variant === "Nominations" ?
        // Otherwise, renders the nominations if the variant is "Nominations"

        <section className="results">
            <h3>Nominations</h3>
            <div className="results-list">
                {nominations.length > 0
                ? nominations.map((movie) => {
                    return (
                        <MovieCard 
                            key = {movie.imdbID}
                            variant = "Nomination"
                            movie = {movie} 
                            nominations = {nominations}
                            setNominations = {setNominations}/>
                    );
                })
                : <div>No nominations to display.</div>}
            </div>

        </section>
        : ''
        }
        </>
    );
};

export default MovieList;