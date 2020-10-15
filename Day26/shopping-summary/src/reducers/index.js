import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';

const rootReducer = combineReducers({
    promoCode: promoCodeReducer
});

export default rootReducer;