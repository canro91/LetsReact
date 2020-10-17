import { SEARCH_MOVIES } from './types';

const doSearchMovies = text => {
    return {
        type: SEARCH_MOVIES,
        payload: text
    };
}

export {
    doSearchMovies
}