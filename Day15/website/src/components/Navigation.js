import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    a, .navbar-brand, .navbar-nav, .nav-item {
        color: #bbb;

        &:hover {
            color: white;
        }
    }

    .nav-item {
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-right: 1rem;
    }
`;

const Navigation = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Homer Simpson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Item>
                                Home
                            </Nav.Item>
                        </LinkContainer>

                        <LinkContainer to="/about">
                            <Nav.Item>
                                About
                                </Nav.Item>
                        </LinkContainer>

                        <LinkContainer to="/contact">
                            <Nav.Item>
                                Contact
                            </Nav.Item>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default Navigation;