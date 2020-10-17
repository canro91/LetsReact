import { combineReducers } from "redux";
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    movies: searchReducer
});

export default rootReducer;