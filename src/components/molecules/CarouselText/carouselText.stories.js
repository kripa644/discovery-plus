import React from 'react';
import CarouselText from './index';
import {CarouselData} from '../../../data';

export default {
    title: 'DiscoveryPlus/CarouselText',
    component: CarouselText,
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
  
export const Carousel_Text = () => {
    return (
      <CarouselText data={CarouselData[0]}/>
    );
};
