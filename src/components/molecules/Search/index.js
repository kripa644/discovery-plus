import React from 'react';
import './style.css';

const Search = ({ children}) => {
    return (
        <div className='Search'>
            {children}
        </div>
    );
};

export default Search;