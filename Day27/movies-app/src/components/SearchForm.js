import React from 'react';
import { Button, Card, Container, Form, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { doFetchMovies } from '../actions/search';

const SearchForm = ({ onFetchMovies }) => {
    const [query, setQuery] = React.useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (query) {
            onFetchMovies(query);
        }
    }

    return (
        <Jumbotron className="mt-5 text-center">
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title><h2><FontAwesomeIcon icon={faSearch} /> Search for a movie, TV series...</h2></Card.Title>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                        placeholder="Search a movie, TV serie"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Jumbotron>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: query => dispatch(doFetchMovies(query))
    }
};

export default connect(null, mapDispatchToProps)(SearchForm);