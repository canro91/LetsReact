import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PickupSavings from './components/PickupSavings/PickupSavings';
import Subtotal from './components/Subtotal/Subtotal';

function App() {
  const [price, setPrice] = React.useState(100);
  const [pickupSaving, setPickupSaving] = React.useState(-3.85);

  return (
    <div className='container'>
      <Container className='purchase-card'>
        <Subtotal price={price.toFixed(2)} />
        <PickupSavings price={pickupSaving.toFixed(2)} />
      </Container>
    </div>
  );
}

export default App;
