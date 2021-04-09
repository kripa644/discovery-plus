import React from 'react';
import Header from './index';
import {headerData} from '../../../data';

export default {
    title: 'DiscoveryPlus/Header',
    component: Header,
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

export const Page_Header = () => {
    return (
        <Header headerData={headerData}/>
    );
};
