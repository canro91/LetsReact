import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MovieItem = ({ movie }) => {
    return (
        <Col className="col-md-3 mb-5">
            <Card className="text-center h-100" bg="dark">
                <Card.Img variant="top" src={movie.Poster} className="w-100 mt-3 px-3 mb-2" />
                <Card.Body>
                    <Card.Title className="text-light">{movie.Title} - {movie.Year}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MovieItem;