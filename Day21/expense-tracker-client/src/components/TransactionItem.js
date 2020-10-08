import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = React.useContext(GlobalContext);

    const signClassName = transaction.amount >= 0 ? 'plus' : 'minus';
    const sign = transaction.amount >= 0 ? '' : '-'

    return (
        <li key={transaction.id} className={signClassName}>
            {transaction.text}{' '}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

export default TransactionItem;