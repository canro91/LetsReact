import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './types';
import { FETCH_MOVIE_DETAILS_BEGIN, FETCH_MOVIE_DETAILS_SUCCESS } from './types';
import { searchMovies, searchMovieDetails } from '../api/omdb';

const doFetchMovies = query => {
    return dispatch => {
        dispatch(doFetchMoviesBegin())
        searchMovies(query)
            .then(data => {
                dispatch(doFetchMoviesSucess(data))
            })
            .catch(error => {
                dispatch(doFetchMoviesFailure(error))
            });
    };
};

const doFetchMovieDetails = id => {
    return dispatch => {
        dispatch(doFetchMovieDetailsBegin())
        searchMovieDetails(id)
            .then(data => {
                dispatch(doFetchMovieDetailsSuccess(data))
            })
            .catch(error => {
                console.log(error);
            });
    };
};

const doFetchMoviesBegin = () => {
    return {
        type: FETCH_MOVIES_BEGIN
    };
}

const doFetchMoviesSucess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: { movies }
    };
}

const doFetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: { error }
    }
}

const doFetchMovieDetailsBegin = () => {
    return {
        type: FETCH_MOVIE_DETAILS_BEGIN
    };
}

const doFetchMovieDetailsSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_DETAILS_SUCCESS,
        payload: { movie }
    };
}

export {
    doFetchMovies,
    doFetchMovieDetails
}