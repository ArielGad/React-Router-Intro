import React from 'react';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                {/* eslint-disable-next-line */}
                <a className="brand-logo">Let's Play</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;