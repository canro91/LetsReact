import { SEARCH_MOVIES_BEGIN, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from '../actions/types';

const initialState = {
    movies: [],
    isLoading: false,
    movie: {},
    error: null
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload.movies
            };

        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                movies: [],
                error: action.payload.error
            };

        default:
            return state;
    }
};

export default searchReducer;