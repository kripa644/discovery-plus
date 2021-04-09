import React from 'react';
import {headerData} from '../../../data';
import SearchButton from './index';

export default {
    title: 'DiscoveryPlus/SearchButton',
    component: SearchButton,
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

export const Search_Button = () => {
    return (
        <SearchButton data={headerData.search}/>
    );
};
