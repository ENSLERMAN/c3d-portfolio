import React from 'react'
import './Jumbotron.scss';

export default function Jumbotron() {
    return (
        <div className="main">
            <div className="navbar-links mr-5 mt-5 d-flex justify-content-end">
                <a href="#">Наши проекты</a>
                <a href="#">О команде</a>
                <a href="#">Контакты</a>
            </div>
            <div className="text">
                <h1>Центр разработки<br />Московского Политеха</h1>
            </div>
        </div>
    );
}