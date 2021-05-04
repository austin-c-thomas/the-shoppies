<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 968dae895441ac1685bb614e33f0206c4185c7d2
import { callApi } from '../api';

import './Search.css';

const Search = ({ query, setQuery, setMovieList }) => {
    const handleQueryChange = async (event) => {
        event.preventDefault();
<<<<<<< HEAD
        setQuery(event.target.value);

        const concatQuery = event.target.value.split(' ').join('+')
        const params = {
            query: `s=${concatQuery.toLowerCase()}&`,
=======
        console.log('Query: ', query);

        const params = {
            query: `s=${query}&`,
>>>>>>> 968dae895441ac1685bb614e33f0206c4185c7d2
        };

        try {
            const data = await callApi(params);
<<<<<<< HEAD
            if (data.Search && data.Search.length > 0) {
                setMovieList(data.Search);
            };
=======
            console.log('Data: ', data);
>>>>>>> 968dae895441ac1685bb614e33f0206c4185c7d2
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <section className="search">
            <form 
                className="search-form"
                onSubmit={event => event.preventDefault()}>
                <fieldset>
                    <label htmlFor="search-input">Search movie titles</label>
                    <input 
                        type="text"
                        id="search-input"
                        value={query}
                        onChange={handleQueryChange} />

                </fieldset>
            </form>
        </section>
    );
};

export default Search;