import React from 'react';
import './style.css';
import Text from '../Text/index';

const CarouselIndicator = ({ handleClick, className}) => {
    return (
        <Text className={className} handleClick={handleClick}/>
    );
};

export default CarouselIndicator;