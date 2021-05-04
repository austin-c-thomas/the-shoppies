import React, { useEffect, useState } from 'react';

import './MovieCard.css';

const MoiveCard = ({ variant, movie, nominations, setNominations }) => {
    
    const [isNominated, setIsNominated] = useState(false);

    useEffect(() => {
        if (nominations && nominations.length > 0) {
            const isCopy = nominations.find(selectedMovie => selectedMovie.imdbID === movie.imdbID);
            if (isCopy) {
                setIsNominated(true);
            };
        };
    }, [nominations, movie.imdbID]);

    const handleAdd = () => {
        const listCopy = [...nominations];
        listCopy.push(movie);
        setNominations(listCopy);
    };

    const handleRemove = () => {
        const listCopy = [...nominations];
        const indexToRemove = listCopy.findIndex(selected => selected.imdbID === movie.imdbID);
        listCopy.splice(indexToRemove, 1);
        setIsNominated(false);
        setNominations(listCopy);
    }

    return (
        <>
        {variant === "Result" ?

        <div className="result-movie-card">

            <img 
                src={movie.Poster} 
                alt={movie.Title} />
            
            <p>{movie.Title}({movie.Year})</p>

            <button 
                className="primary"
                disabled={isNominated ? true : false}
                onClick={handleAdd}>Nominate</button>
        </div>

        : variant === "Nomination" ?
        
        <div className="nominated-movie-card">

            <img 
                src={movie.Poster} 
                alt={movie.Title} />
            
            <p>{movie.Title}({movie.Year})</p>

            <button 
                className="primary"
                onClick={handleRemove}>Remove</button>
        </div>
        : ''}
        </>
    );
};

export default MoiveCard;