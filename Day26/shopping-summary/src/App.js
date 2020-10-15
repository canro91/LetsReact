import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PickupSavings from './components/PickupSavings/PickupSavings';
import PromoCode from './components/PromoCode/PromoCode';
import Subtotal from './components/Subtotal/Subtotal';
import TaxesFees from './components/TaxesFees/TaxesFees';

function App() {
  const [subTotal, setSubTotal] = React.useState(100);
  const [pickupSavings, setPickupSavings] = React.useState(-3.85);
  const [taxes, setTaxes] = React.useState(0);
  const [estimatedTotal, setEstimatedTotal] = React.useState(0);
  const [disablePromoCode, setDisablePromoCode] = React.useState(false);

  React.useEffect(() => {
    const taxes = (subTotal + pickupSavings) * 0.0875;
    setTaxes(taxes);

    const estimatedTotal = subTotal + pickupSavings + taxes;
    setEstimatedTotal(estimatedTotal);
  }, [subTotal, pickupSavings]);

  const giveDiscountHandler = () => {

  };

  return (
    <div className='container'>
      <Container className='purchase-card'>
        <Subtotal price={subTotal.toFixed(2)} />
        <PickupSavings price={pickupSavings.toFixed(2)} />
        <TaxesFees taxes={taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal total={estimatedTotal.toFixed(2)} />
        <ItemDetails quantity={1} price={100.99} />
        <hr/>
        <PromoCode
          giveDiscount={giveDiscountHandler}
          disablePromoCode={disablePromoCode}
        />
      </Container>
    </div>
  );
}

export default App;
