import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TaxesFees = ({ taxes }) => {
    return (
        <Row className='show-grid'>
            <Col md={6}>Taxes & fees</Col>
            <Col md={6}>{`$${taxes}`}</Col>
        </Row>
    );
}

export default TaxesFees;