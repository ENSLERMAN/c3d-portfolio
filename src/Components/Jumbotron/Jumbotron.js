import React from 'react'; 
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Jumbotron.scss';

export default function Jumbotron() {
    return (
        <div className="main">
            <Navbar collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end mr-md-4 mt-md-4">
                <Nav className="navbar-links text-right">
                    <Nav.Item>
                        <AnchorLink className="nav-link" href="#projects">Наши проекты</AnchorLink>
                    </Nav.Item>
                    <Nav.Item>
                        <AnchorLink className="nav-link" href="#team">О команде</AnchorLink>
                    </Nav.Item>
                    <Nav.Item>
                        <AnchorLink className="nav-link" href="#contacts">Контакты</AnchorLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="text">
                <h1>Центр разработки<br />Московского Политеха</h1>
            </div>
        </div>
    );
}