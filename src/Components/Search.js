import React from "react";
import { BiSearchAlt } from 'react-icons/bi';
import './Search.css';

const Search = ({ handleSearch }) => {
    return (
        <div className="search">
            <BiSearchAlt className="search-icon" size='1.3em'/>
            <input 
                type="text" 
                placeholder="Type to search..."
                onChange={(event) => handleSearch(event.target.value)}
            />

        </div>
    )
};

export default Search;