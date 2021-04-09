import React from 'react';
import './style.css';
import cn from 'classnames';

const Link = ({location, className, handleClick, children}) => {
    const classNames = cn('Link', `${className}`);
    return (
        <a className={classNames} href={location} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;