import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from './Loading';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';

const Home = ({ isLoading, error }) => {

    return (
        <Container>
            <SearchForm />
            { isLoading ? <Loading /> : <MoviesList /> }
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