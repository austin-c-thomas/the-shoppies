import React, { useState } from 'react';
import { callApi } from '../api';

const Search = ({ setMovieList }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Query: ', query);

        const params = {
            query: `s=${query.toLowerCase()}&`,
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
                onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="search-input">Search movie titles</label>
                    <input 
                        type="text"
                        name="search-input"
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                        }}/>
                    
                    <button 
                        className="primary" 
                        type="submit">Search</button>

                </fieldset>
            </form>
        </section>
    );
};

export default Search;