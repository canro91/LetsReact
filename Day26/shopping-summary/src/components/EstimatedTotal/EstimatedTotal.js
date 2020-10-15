import React from 'react';
import { Col, Row } from 'react-bootstrap';

const EstimatedTotal = ({ total }) => {
    return (
        <Row>
            <Col md={6}><h2>Est. Total</h2></Col>
            <Col md={6}><h2>{`$${total}`}</h2></Col>
        </Row>
    );
}

export default EstimatedTotal;