import React from 'react';
import Input from './index';

export default {
    title: 'DiscoveryPlus/Input',
    component: Input,
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

export const Search_Input = () => {
    return (
        <Input type="text" className='search-input' placeholder='Search for a show, shorts etc.'/>
    );
};
