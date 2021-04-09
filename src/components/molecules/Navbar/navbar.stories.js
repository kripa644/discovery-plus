import React from 'react';
import NavBar from './index';
import {headerData} from '../../../data';

export default {
    title: 'DiscoveryPlus/NavBar',
    component: NavBar,
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

export const Navbar = () => {
    return (
        <NavBar navbarData={headerData.navLinks}/>
    );
};
