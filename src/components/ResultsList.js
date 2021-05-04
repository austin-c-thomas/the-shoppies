import React from 'react';
import MovieCard from './MovieCard';

import './ResultsList.css';

const ResultsList = ({ query, movieList }) => {
    return (
        <section className="results">
            <h3>Results for "{query}"</h3>
            <div className="results-list">
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