import React from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';

const PromoCode = ({ disablePromoCode, giveDiscount }) => {
    const [open, setOpen] = React.useState(false);
    const [promoCode, setPromoCode] = React.useState('');

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
                                            disabled={disablePromoCode}
                                            onClick={giveDiscount}
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

export default PromoCode;