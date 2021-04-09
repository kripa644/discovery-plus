import React from 'react';
import CarouselIndicator from './index';

export default {
    title: 'DiscoveryPlus/CarouselIndicator',
    component: CarouselIndicator,
    parameters: {
      backgrounds: {
        default: 'dark',
        values: [
          { name: 'white', value: '#ffffff' },
          { name: 'light', value: '#f6f9fd' },
          { name: 'dark', value: '#121432' },
          { name: 'black', value: '#000000' },
        ],
      },
    },
};

export const Carousel_Indicator_Active = () => {
    return (
        <CarouselIndicator className='carouselIndicatorActive'/>
    );
};

export const Carousel_Indicator_Inactive = () => {
    return (
        <CarouselIndicator className='carouselIndicatorInactive'/>
    );
};
