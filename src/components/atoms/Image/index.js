import React from 'react';
import './style.css';

const Image = ({source, width, height, alt, handleClick, className}) => {
    return (
        <img src={source} className={className} alt={alt} width={width} height={height} onClick={handleClick}/>
    );
};

export default Image;