import React from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    );
};