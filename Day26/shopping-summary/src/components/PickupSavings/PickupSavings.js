import React from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

const styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

const PickupSavings = ({ price }) => {
    const tooltip = (
        <Tooltip id='tooltip'>
            <p>Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>
        </Tooltip>
    );

    return (
        <Row className='show-grid'>
            <Col md={6}>
                <OverlayTrigger placement='bottom' overlay={tooltip}>
                    <div style={styles.pickupSavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col md={6} style={styles.totalSavings}>{`$${price}`}</Col>
        </Row>
    );
}

export default PickupSavings;