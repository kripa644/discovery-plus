import React from 'react';
import Text from './index';

export default {
    title: 'DiscoveryPlus/Text',
    component: Text,
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

export const Carousel_Heading = () => {
    return (
        <Text className='carouselHeading'>Baggage Battles</Text>
    );
};

export const Carousel_SubHeading = () => {
    return (
        <Text className='carouselSubheading'>Big Brains complete for the little of next great American Innovator</Text>
    );
};

export const Carousel_Play = () => {
    return (
        <Text className='carouselPlay'>Play</Text>
    );
};

export const Image_Text = () => {
    return (
        <Text className='imageText'>Adventure</Text>
    );
};