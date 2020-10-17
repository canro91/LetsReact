import React from 'react';
import { Nav, Navbar as Navigation } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImdb, faReact } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <Navigation collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navigation.Brand>Your Movie Place</Navigation.Brand>
            <Navigation.Toggle />
            <Navigation.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Item className="mr-4">
                        <FontAwesomeIcon icon={faImdb} size="5x" color="white" />
                    </Nav.Item>
                    <Nav.Item className="mr-4">
                        <FontAwesomeIcon icon={faReact} size="5x" color="white" />
                    </Nav.Item>
                </Nav>
            </Navigation.Collapse>
        </Navigation>
    );
}

export default Navbar;