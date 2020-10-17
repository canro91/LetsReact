import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const Home = ({ isLoading }) => {
    return (
        <Container>
            {isLoading ? 'isLoading': 'isntLoading'}
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.movies.isLoading
    };
}

export default connect(mapStateToProps)(Home);