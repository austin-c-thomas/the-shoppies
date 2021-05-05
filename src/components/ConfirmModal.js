import React from 'react';
import MovieCard from './MovieCard';

import './ConfrimModal.css';

const ConfirmModal = ({ nominations, setNominations }) => {
    const handleSubmit = () => {
        setNominations([]);
    };

    return (
        <div className="modal-background">
            <div className="confirm-modal">
                <h1>Your 5 Nominations:</h1>

                <div className="choices-container">
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

                <button 
                    className="primary large"
                    onClick={handleSubmit}>Confirm Choices</button>

                <p className="disclaimer">If you wish to change your list, remove one of your choices to exit this window.</p>
            </div>
        </div>

    );
};

export default ConfirmModal;