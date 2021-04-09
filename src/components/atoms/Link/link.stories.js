import React from 'react';
import Link from './index';

export default {
    title: 'DiscoveryPlus/Link',
    component: Link,
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

export const NavLInk = () => {
    return (
        <Link location="/">Explore</Link>
    );
};
