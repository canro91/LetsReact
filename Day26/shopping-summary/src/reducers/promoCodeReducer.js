import { ADD_PROMO_CODE, PROMO_CODE_ADDED } from "../actions/types";

const initialState = {
    enabled: true,
    value: ''
};

const promoCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROMO_CODE:
            return {
                ...state,
                value: action.payload
            };

        case PROMO_CODE_ADDED:
            return {
                ...state,
                enabled: false
            };

        default:
            return state;
    }
};

export default promoCodeReducer;