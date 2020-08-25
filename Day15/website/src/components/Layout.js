import React from 'react';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Layout;