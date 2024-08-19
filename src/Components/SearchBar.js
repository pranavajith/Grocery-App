import React, { useState } from 'react';

const SearchBar = ({ performSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [stockedRequired, SetStockedRequired] = useState(false);

    const handleInputChange = (e) => setSearchTerm(e.target.value);

    const handleSearch = () => {
        console.log("here2");
        console.log(searchTerm, stockedRequired);
        performSearch(searchTerm, stockedRequired);
        setSearchTerm('');
    }

    const handleChecked = (e) => {
        SetStockedRequired(e.target.checked);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder='Search...'
            />
            <br />
            <button onClick={handleSearch}>Search</button>
            <br />
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={stockedRequired}
                    onChange={handleChecked}
                />
                In Stock Only
            </label>
        </div>
    );
}

export default SearchBar;
