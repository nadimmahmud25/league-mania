import React from 'react';
import './Header.css';
import stadium from '../../images/Stadium.jpg';

const Header = () => {
    return (
        <header className="header">
        <div className="navbar">
            <div className="container">
                <nav className="navbar-nav">
                <h2 >Sport World</h2>
                <img src={stadium} alt="Sport World" />
                    
                </nav>
            </div>
        </div>
    </header>
    );
};

export default Header;