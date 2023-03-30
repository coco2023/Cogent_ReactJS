import React from 'react';
//impoart ReactDOM from 'react-dom';
import './header.css';

function Header() {
    return (
        <div class="header">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/policy">Policy</a>
            <a href="/suggestion">suggestion</a>
        </div>
    );
}
export default Header;

