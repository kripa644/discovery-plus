import React from 'react';
import Search from './index';
import {headerData} from '../../../data';
import Image from '../../atoms/Image/index';
import Input from '../../atoms/Input/index';

export default {
    title: 'DiscoveryPlus/Search',
    component: Search,
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

export const Search_Field = () => {
    return (
        <Search>
            <Input type="text" className='search-input' placeholder={headerData.search.placeHolder}/>
            <Image source={headerData.search.searchIcon} className="searchIcon" />
        </Search>
    );
};
