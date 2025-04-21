import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.scss";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">MY5</Link>
            </div>
            <nav className="link-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/guestbook">Guest Book</Link></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={() => { toggleMenu(); }}>
                &#9776;
            </div>
            {
                isMenuOpen && (
                    <div className="mobile-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/guestbook">Guest Book</Link></li>
                        </ul>
                    </div>
                )
            }
        </header>
    );
}

export default Navbar;