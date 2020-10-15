import React from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { doAddPromoCode } from '../../actions/promoCodeActions';

const PromoCode = ({ enablePromoCode, onAddPromoCode }) => {
    const [open, setOpen] = React.useState(false);
    const [promoCode, setPromoCode] = React.useState('');

    const giveDiscountHandler = () => {
        if (promoCode) {
            onAddPromoCode(promoCode);
        }
    };

    return (
        <div>
            <Button
                className="promo-code-button"
                variant="outline-primary"
                onClick={() => setOpen(open => !open)}
            >
                {!open ? `Apply` : `Hide`} promo code
                {!open ? ` +` : ` -`}
            </Button>
            <Collapse in={open}>
                <div>
                    <Card>
                        <Card.Body>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <Form.Group controlId="formInlineName">
                                            <Form.Label>Promo Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your promo code"
                                                value={promoCode}
                                                onChange={e => setPromoCode(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Button
                                            block
                                            variant="success"
                                            className="btn-round"
                                            disabled={!enablePromoCode}
                                            onClick={giveDiscountHandler}
                                        >
                                            Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

// Notice combineReduce in reducers/index.js
const mapStateToProps = state => {
    return {
        promoCode: state.promoCode.value,
        enablePromoCode: state.promoCode.enabled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPromoCode: (promoCode) => dispatch(doAddPromoCode(promoCode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);