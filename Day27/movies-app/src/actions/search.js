import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './types';
import { searchMovies } from '../api/omdb';

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

export {
    doFetchMovies,
}