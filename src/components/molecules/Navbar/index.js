import React from 'react';
import Link from '../../atoms/Link/index';
import './style.css';

const NavBar = ({navbarData}) => {
    return (
        <div className="navLinks">
            {navbarData.map((link, index) => {
                const className = `${index === 0 ? 'selected' : ''} nav-link`;
                return (
                    <Link location="/" className={className} key={index}>
                        {link}
                    </Link>
                )
            })}
        </div>
    );
};

export default NavBar;