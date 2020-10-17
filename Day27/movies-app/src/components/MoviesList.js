import React from 'react';
import { connect } from 'react-redux';

const MoviesList = ({ movies }) => {
    console.log(movies);

    return (
        <div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    };
}

export default connect(mapStateToProps)(MoviesList);