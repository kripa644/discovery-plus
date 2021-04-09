import React from 'react';
import Image from './index';

export default {
    title: 'DiscoveryPlus/Image',
    component: Image,
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          { name: 'white', value: '#ffffff' },
          { name: 'light', value: '#f6f9fd' },
          { name: 'dark', value: '#121432' },
          { name: 'black', value: '#000000' },
        ],
      },
    },
};

export const Image_Without_CurvedBorder = () => {
    return (
        <Image source='adventure.jpg' width="300" height="300" />
    );
};

export const Image_With_CurvedBorder = () => {
return (
    <Image source='adventure.jpg' width="220" height="120" className='border-rad-10'/>
);
};