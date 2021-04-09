import React from 'react';
import './style.css';
import '../../_settings/_base.css';

const CarouselTextButtons = ({children}) => {
    return (
        <div className='carouselButtons margin-top-20'>
            {children}
        </div>
    );
};

export default CarouselTextButtons;