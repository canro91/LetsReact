import React from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
};
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', transaction });
    };

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', id: id });
    };

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};