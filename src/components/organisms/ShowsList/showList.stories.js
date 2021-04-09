import React from 'react';
import ShowList from './index';
import {ShowData} from '../../../data';

export default {
    title: 'DiscoveryPlus/ShowList',
    component: ShowList,
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

export const Shows_List = () => {
    return (
        <ShowList showData={ShowData}/>
    );
};
