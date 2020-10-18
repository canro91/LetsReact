import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { doFetchMovieDetails } from '../actions/search';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Loading from './Loading';

const Movie = ({ isLoading, movie, onFetchMovieDetails }) => {
    const { id } = useParams();

    React.useEffect(() => {
        onFetchMovieDetails(id);
    }, []);

    const movieDetails = (
        <Container className="mt-5">
            <Row>
                <Col className="col-md-4">
                    <Card>
                        <Card.Img variant="top" src={movie.Poster} className="w-100 mt-3 px-3 mb-2" />
                    </Card>
                </Col>
                <Col className="col-md-8">
                    <h2 className="mb-4">{movie.Title}</h2>
                    <ListGroup>
                        <ListGroup.Item><strong>Genre:</strong> {movie.Genre}</ListGroup.Item>
                        <ListGroup.Item><strong>Released:</strong> {movie.Released}</ListGroup.Item>
                        <ListGroup.Item><strong>Rated:</strong> {movie.Rated}</ListGroup.Item>
                        <ListGroup.Item><strong>IMDB Rating:</strong> {movie.imdbRating}</ListGroup.Item>
                        <ListGroup.Item><strong>Director:</strong> {movie.Director}</ListGroup.Item>
                        <ListGroup.Item><strong>Writer:</strong> {movie.Writer}</ListGroup.Item>
                        <ListGroup.Item><strong>Actors:</strong> {movie.Actors}</ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-12">
                <Card bg="dark" className="my-5 text-light">
                    <Card.Body>
                        <h3>About </h3>
                        {movie.Plot}
                        <hr />
                        <Button
                            href={'https://www.imdb.com/title/' + movie.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on IMDB
                        </Button>
                        <LinkContainer to="/">
                            <Button className="mx-2 my-2">
                                Go Back To Search
                            </Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );

    const content = isLoading ? <Loading /> : movieDetails;
    return (
        <div>
            {content}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.movies.isLoading,
        movie: state.movies.movie
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDetails: id => dispatch(doFetchMovieDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);