import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <Navbar bg="light" fixed="bottom">
            <Navbar.Text>
                <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/canro91/LetsReact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Let's React
                    </a>, learn React in 30 days. Using <FontAwesomeIcon id="react-logo" icon={faReact} /> React JS &amp; Redux JS integrated with
                    {' '} <a href="http://www.omdbapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OMDB API
                    </a>
            </Navbar.Text>
        </Navbar>
    );
}

export default Footer;