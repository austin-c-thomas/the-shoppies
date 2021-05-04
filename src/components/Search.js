import React from 'react';
import { callApi } from '../api';

import './Search.css';

const Search = ({ query, setQuery, setMovieList }) => {
    const handleQueryChange = async (event) => {
        event.preventDefault();
        setQuery(event.target.value);

        const concatQuery = event.target.value.split(' ').join('+')
        const params = {
            query: `s=${concatQuery.toLowerCase()}&`,
        };

        try {
            const data = await callApi(params);
            if (data.Search && data.Search.length > 0) {
                setMovieList(data.Search);
            };
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