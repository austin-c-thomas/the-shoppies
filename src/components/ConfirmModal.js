import React from 'react';
import MovieCard from './MovieCard';

import './ConfrimModal.css';

const ConfirmModal = ({ nominations, setNominations }) => {
    return (
        <div className="modal-background">
            <div className="confirm-modal">
                <h1>Your Nominations:</h1>
                {nominations.map((movie) => {
                    return (
                        <MovieCard
                            key = {movie.imdbID}
                            variant = "Nomination"
                            movie = {movie} 
                            nominations = {nominations}
                            setNominations = {setNominations}/>
                    )
                })}
            </div>
        </div>

    );
};

export default ConfirmModal;