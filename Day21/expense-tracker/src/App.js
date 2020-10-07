import React from 'react';
import Balance from './components/Balance'
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Summary />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
