import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Movie from './MovieItem';

const MovieList = ({ movies }) => {
    const movieList = movies.map((movie, index) =>
        <Movie key={index} movie={movie} />);

    return (
        <Row>
            { movieList }
        </Row>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    };
}

export default connect(mapStateToProps)(MovieList);