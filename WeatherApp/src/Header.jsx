import React from 'react';

const Header = ({ handleSearch, searchTerm, setSearchTerm }) => {
    return (
        <div className="header">
            <h1>CURRENT WEATHER APP</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id="searchBar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter City..."
                />
            </form>
        </div>
    );
};

export default Header;
