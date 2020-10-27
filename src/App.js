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
      });
    }
  }, [loaded]);

  const initPayments = () => {
    console.log('loaded :: ', loaded);
    if (loaded) {
      const checkoutOptions = {
        checkoutKey: 'test-checkout-key-d6f65d6024b44becb6a4f5ad5fee8d2a', //[Required] Test or Live GUID with dashes
        paymentId: '027400005f97b07bcbcf1f1738af2dfb', //[required] GUID without dashes
        partnerMerchantNumber: '100018348', //[optional] Number
        containerId: 'dibs-complete-checkout', //[optional] defaultValue: dibs-checkout-content
        language: 'en-GB', //[optional] defaultValue: en-GB
        theme: {
          // [optional] - will change defaults in the checkout

          textColor: 'blue', // any valid css color

          linkColor: '#bada55', // any valid css color

          panelTextColor: 'rgb(125, 125, 125)', // any valid css color

          panelLinkColor: '#0094cf', // any valid css color

          primaryColor: '#0094cf', // any valid css color

          buttonRadius: '50px', // pixel or percentage value

          buttonTextColor: '#fff', // any valid css color

          backgroundColor: '#eee', // any valid css color

          panelColor: '#fff', // any valid css color

          outlineColor: '#444', // any valid css color

          primaryOutlineColor: '#444', // any valid css color
        },
      };
      const checkout = window.Dibs.Checkout(checkoutOptions);

      //this is the event that the merchant should listen to redirect to the “payment-is-ok” page

      checkout.on('payment-completed', function (response) {
        console.log('RESPONSE ON PAYMENT COMPLETED :: ', response);
        /*
                  Response:
                                 paymentId: string (GUID without dashes)
                  */
        window.location = '/PaymentSuccessful';
      });
    }
  };

  return (
    <div className="App">
      <div id="dibs-complete-checkout"> </div>  
      <button id="CreatePayment" onClick={() => initPayments()}>
        Create payment
      </button>
       
    </div>
  );
};

export default App;
