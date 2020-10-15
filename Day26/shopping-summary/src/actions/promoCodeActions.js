import { ADD_PROMO_CODE, PROMO_CODE_ADDED } from './types';

const doAddPromoCode = (promoCode) =>  {
    return ({
        type: ADD_PROMO_CODE,
        payload: promoCode
    });
};

const doPromoCodeAdded = () => {
    return ({
        type: PROMO_CODE_ADDED
    })
}

export {  doAddPromoCode, doPromoCodeAdded };