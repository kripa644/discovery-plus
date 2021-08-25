import React from 'react';
import './style.css';
import classnames from 'classnames';
import '../../_settings/_base.css';

export const ButtonType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
};

// button themes
export const ButtonTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
};

const Button = ({type, theme, className, handleClick, children}) => {
    const classNames = classnames('button', `${theme}`, `${className}`);

    return (
        <button type={type} className={classNames} onClick={handleClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    theme: ButtonTheme.PRIMARY,
}

export default Button;