import React from 'react'
import './Navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar-links">
            <div>
                <a href="#">Наши проекты</a>
                <a href="#">О команде</a>
                <a href="#">Контакты</a>
            </div>
        </div>
    );
}