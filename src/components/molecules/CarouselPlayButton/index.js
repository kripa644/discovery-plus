import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import Image from '../../atoms/Image/index';
import Text from '../../atoms/Text/index';

const CarouselPlayButton = ({className}) => {
    return (
        <div className={`playButton ${className}`}>
            <Image source='play-button-1.png' width="92" height="67" alt='Play'/>
            <Text className='carouselPlay'>Play</Text>
        </div>
    );
};

export default CarouselPlayButton;