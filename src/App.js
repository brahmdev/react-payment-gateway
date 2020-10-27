import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import loadDibs from './loadDibs';
import './App.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadDibs(() => {
        setLoaded(true);
        //window.cleanUp('027400005f97b07bcbcf1f1738af2dfb');
        /* other code */
        window.initCheckout({
          checkoutKey: 'test-checkout-key-d6f65d6024b44becb6a4f5ad5fee8d2a', //[Required] Test or Live GUID with dashes
          paymentId: '027400005f97b07bcbcf1f1738af2dfb', //[required] GUID without dashes
          partnerMerchantNumber: '100018348', //[optional] Number
          containerId: 'dibs-complete-checkout', //[optional] defaultValue: dibs-checkout-content
          language: 'en-GB', //[optional] defaultValue: en-GB
        });
      });
    } else {
    }
  }, [loaded]);

  const initPayments = () => {
    console.log('loaded :: ', loaded);
    if (loaded) {
      //this is the event that the merchant should listen to redirect to the “payment-is-ok” page
      /* checkout.on('payment-completed', function (response) {
        console.log('RESPONSE ON PAYMENT COMPLETED :: ', response);
        window.location = '/PaymentSuccessful';
      }); */
    }
  };

  return (
    <div className="App">
      <div id="dibs-complete-checkout"> </div>  
      {/* <button id="CreatePayment" onClick={() => initPayments()}>
        Create payment
      </button> */}
       
    </div>
  );
};

export default App;
