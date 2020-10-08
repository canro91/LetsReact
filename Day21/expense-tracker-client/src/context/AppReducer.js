export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
           return {
               ...state,
               transactions: action.transactions,
               loading: false
           };

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.concat(action.transaction)
            };

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.id)
            }

        case 'ERROR_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;

    }
};