import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PickupSavings from './components/PickupSavings/PickupSavings';
import Subtotal from './components/Subtotal/Subtotal';
import TaxesFees from './components/TaxesFees/TaxesFees';

function App() {
  const [price, setPrice] = React.useState(100);
  const [pickupSaving, setPickupSaving] = React.useState(-3.85);
  const [taxes, setTaxes] = React.useState(0);

  return (
    <div className='container'>
      <Container className='purchase-card'>
        <Subtotal price={price.toFixed(2)} />
        <PickupSavings price={pickupSaving.toFixed(2)} />
        <TaxesFees taxes={taxes.toFixed(2)} />
        <hr />
      </Container>
    </div>
  );
}

export default App;
