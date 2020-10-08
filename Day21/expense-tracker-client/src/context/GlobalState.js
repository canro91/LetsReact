import React from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading: true
};
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                transactions: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'ERROR_TRANSACTIONS',
                error: err.response.data.error
            });
        }
    };

    const addTransaction = async (transaction) => {
        try {
            const res = await axios.post('/api/v1/transactions', transaction);

            dispatch({
                type: 'ADD_TRANSACTION',
                transaction: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'ERROR_TRANSACTIONS',
                error: err.response.data.error
            });
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                id: id
            });
        } catch (err) {
            dispatch({
                type: 'ERROR_TRANSACTIONS',
                error: err.response.data.error
            });
        }
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};