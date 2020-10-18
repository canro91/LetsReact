import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MovieItem = ({ movie }) => {
    return (
        <Col className="col-md-3 mb-5">
            <Card className="text-center h-100" bg="dark">
                <Card.Img variant="top" src={movie.Poster} className="w-100 mt-3 px-3 mb-2" />
                <Card.Body>
                    <Card.Title className="text-light">{movie.Title} - {movie.Year}</Card.Title>
                </Card.Body>
                <LinkContainer to={`movie/${movie.imdbID}`}>
                    <Button size="lg" className="mx-2 my-2">
                        Details <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </LinkContainer>
            </Card>
        </Col>
    );
}

export default MovieItem;