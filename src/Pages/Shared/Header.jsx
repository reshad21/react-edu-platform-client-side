import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/faq'>Faq</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    );
};

export default Header;