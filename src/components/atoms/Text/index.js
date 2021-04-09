import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import cn from 'classnames';

const Text = ({ className, handleClick, children}) => {
    const classNames = cn('Text', `${className}`);
    return (
        <p className={classNames} onClick={handleClick}>
            {children}
        </p>
    );
};

export default Text;