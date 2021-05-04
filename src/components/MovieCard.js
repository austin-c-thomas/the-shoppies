import React from 'react';

import './MovieCard.css';

const MoiveCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <h1>({movie.Year})</h1>
        </div>
    );
};

export default MoiveCard;