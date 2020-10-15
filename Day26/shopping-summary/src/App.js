import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PickupSavings from './components/PickupSavings/PickupSavings';
import Subtotal from './components/Subtotal/Subtotal';
import TaxesFees from './components/TaxesFees/TaxesFees';

function App() {
  const [subTotal, setSubTotal] = React.useState(100);
  const [pickupSaving, setPickupSaving] = React.useState(-3.85);
  const [taxes, setTaxes] = React.useState(0);
  const [estimatedTotal, setEstimatedTotal] = React.useState(0);

  return (
    <div className='container'>
      <Container className='purchase-card'>
        <Subtotal price={subTotal.toFixed(2)} />
        <PickupSavings price={pickupSaving.toFixed(2)} />
        <TaxesFees taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal total={estimatedTotal} />
        <ItemDetails quantity={1} price={100.99} />
        <hr/>
      </Container>
    </div>
  );
}

export default App;
