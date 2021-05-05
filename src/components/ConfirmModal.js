import React, { useState } from 'react';
import MovieCard from './MovieCard';

import './ConfrimModal.css';
import { Movie } from '@material-ui/icons';

const ConfirmModal = ({ nominations, setNominations, setMovieList, setQuery }) => {
    const [confirmStage, setConfirmStage] = useState(1);

    const handleConfirm = () => {
        setConfirmStage(2);
    };

    const handleClose = () => {
        setNominations([]);
        setMovieList([]);
        setQuery('');
        localStorage.clear();
    };

    return (
        <div className="modal-background">
            <div className="confirm-modal">

                {confirmStage === 1 ?
                <>
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
                        onClick={handleConfirm}>Confirm Choices</button>

                    <p className="disclaimer">If you wish to change your list, remove one of your choices to exit this window.</p>

                </>
                :
                <div className="confirmed">
                    <h1>Thanks!</h1>
                    <h2>Your nominations are locked in!</h2>
                    
                    <div className="choices-gallery">
                        {nominations.map((movie) => {
                            return (
                                <React.Fragment key={movie.imdbID}>
                                {movie.Poster !== "N/A" ? 
                                    <img 
                                        src={movie.Poster} 
                                        alt={movie.Title} />
                                    : <Movie />
                                    }
                                </React.Fragment>
                            )
                        })}
                    </div>

                    <button 
                        className="primary large"
                        onClick={handleClose}>Exit</button>
                </div>
                }
            </div>
 
        </div>

    );
};

export default ConfirmModal;