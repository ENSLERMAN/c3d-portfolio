import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Jumbotron.scss';

export default function Jumbotron() {
    return (
        <div className="main">
            <Navbar collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href=""></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end mr-md-4 mt-md-4">
                <Nav className="navbar-links text-right">
                    <Nav.Item>
                        <Nav.Link href="#">Наши проекты</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">О команде</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Контакты</Nav.Link>
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