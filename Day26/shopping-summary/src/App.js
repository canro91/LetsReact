import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal';

function App() {
  const [price, setPrice] = React.useState(100);
  return (
    <div className='container'>
      <Container className='purchase-card'>
        <h1>Hello, world</h1>
        <Subtotal price={price.toFixed(2)} />
      </Container>
    </div>
  );
}

export default App;
