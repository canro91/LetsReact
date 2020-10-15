import React from 'react';
import { Button, Card, Col, Collapse, Media, Row } from 'react-bootstrap';

const ItemDetails = ({ quantity, price }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Button
                className="item-details-button"
                variant="outline-primary"
                onClick={() => setOpen(open => !open)}
            >
                {!open ? `See` : `Hide`} item details
                {!open ? ` +` : ` -`}
            </Button>
            <Collapse in={open}>
                <div>
                    <Card>
                        <Card.Body>
                            <Media>
                                <img
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://valueofficefurniture.com.au/wp-content/uploads/2018/11/Breathe-Chair-Red.jpg"
                                />
                                <Media.Body>
                                    <p>Beautiful red chair to decore your office without harming your back</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: {quantity}
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

export default ItemDetails;