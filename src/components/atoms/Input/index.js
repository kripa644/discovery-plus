import React from 'react';
import './style.css';

const Input = ({placeholder, inputValue, type, className, handleChange}) => {
    return (
        <input type={type} className={className} placeholder={placeholder} autoComplete="off" value={inputValue} onChange={handleChange}/>
    );
};

export default Input;