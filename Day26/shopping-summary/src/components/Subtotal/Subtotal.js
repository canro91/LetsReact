import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Subtotal = ({ price }) => {
    return (
        <Row className='show-grid'>
            <Col md={6}>Subtotal</Col>
    <Col md={6}>{`$${price}`}</Col>

        </Row>
    );
}

export default Subtotal;