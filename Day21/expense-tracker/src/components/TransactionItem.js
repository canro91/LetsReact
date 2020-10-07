import React from 'react';

const TransactionItem = ({ transaction }) => {
    const signClassName = transaction.amount >= 0 ? 'plus' : 'minus';
    const sign = transaction.amount >= 0 ? '' : '-'

    return (
        <li key={transaction.id} className={signClassName}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    );
}

export default TransactionItem;