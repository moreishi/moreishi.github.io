import React from 'react';
import {Navbar} from 'react-bootstrap';
import Search from '../common/Search';

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Splash Alpha</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Search />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default  Navigation;