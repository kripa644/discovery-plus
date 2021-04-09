import React from 'react';
import CategoryCardList from './index';
import {CategoryData} from '../../../data';

export default {
    title: 'DiscoveryPlus/CategoryCardList',
    component: CategoryCardList,
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

export const Category_Card_List = () => {
    return (
        <CategoryCardList categoryData={CategoryData}/>
    );
};
