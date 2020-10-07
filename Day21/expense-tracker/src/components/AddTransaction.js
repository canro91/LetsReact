import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = React.useContext(GlobalContext);

    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);

    const handleAddTransaction = (event) => {
        event.preventDefault();

        if (text.trim() && amount) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            };
           addTransaction(newTransaction);

           setText('');
           setAmount(0);
        }
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleAddTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value) } placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;