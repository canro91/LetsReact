import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from './Loading';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

const Home = ({ isLoading, error }) => {

    return (
        <Container>
            <SearchForm />
            { isLoading ? <Loading /> : <MovieList /> }
            { error ? <Alert variant="warning" dismissible>{error}</Alert> : '' }
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.movies.isLoading,
        error: state.movies.error
    };
}

export default connect(mapStateToProps)(Home);