import React from 'react';
import '../../_settings/_base.css';
import './style.css';

const ShowList = ({className, children}) => {
    return (
        <div className={`showData ${className}`}>
            {children}
        </div>
    );
};

export default ShowList;