import { SEARCH_MOVIES } from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    isLoading: false,
    movie: {}
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return {
                ...state,
                text: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
};

export default searchReducer;