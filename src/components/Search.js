import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Search initiated');
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