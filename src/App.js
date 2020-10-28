import React, { useEffect, useState } from 'react';
import loadDibs from './loadDibs';
import './App.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadDibs(() => {
        setLoaded(true);
      });
    } else {
    }
  }, [loaded]);

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
