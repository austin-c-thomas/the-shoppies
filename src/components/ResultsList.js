import React from 'react';
import MovieCard from './MovieCard';

import './ResultsList.css';

const ResultsList = ({ movieList }) => {
    console.log('MOVIES: ', movieList);
    return (
        <section className="results">
            <div className="results-list-wrapper">
                {movieList.length > 0
                ? movieList.map((movie) => {
                    return (
                        <MovieCard 
                            key = {movie.imdbID}
                            movie = {movie} />
                    );
                })
                : <div>No results to display.</div>}
            </div>
        </section>
    );
};

export default ResultsList;