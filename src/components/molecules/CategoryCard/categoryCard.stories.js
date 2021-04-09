import React from 'react';
import CategoryCard from './index';
import {CategoryData} from '../../../data';

export default {
    title: 'DiscoveryPlus/CategoryCard',
    component: CategoryCard,
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

export const Category_Card = () => {
    return (
        <CategoryCard imageSource={CategoryData[0].image} imageText={CategoryData[0].text}/>
    );
};
