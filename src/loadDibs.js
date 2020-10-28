const loadDibs = (callback) => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://test.checkout.dibspayment.eu/v1/checkout.js?v=1';
    script.id = 'dibs';
    document.body.appendChild(script);
    script.onload = () => {
      console.log('DIBS LOADED');
      const checkoutOptions = {
        checkoutKey: '<CHECKOUT_KEY_HERE>', //[Required] Test or Live GUID with dashes
        paymentId: '<PAYMENT_ID_HERE_', //[required] GUID without dashes
        containerId: 'dibs-complete-checkout', //[optional] defaultValue: dibs-checkout-content
        language: 'en-GB', //[optional] defaultValue: en-GB
      };
      const dibsObject = window.Dibs;
      var checkout = new dibsObject.Checkout(checkoutOptions);
      checkout.on('payment-completed', function (response) {
        console.log('RESPONSE ON PAYMENT COMPLETED :: ', response);
      });
      checkout.on('address-changed', function (response) {
        console.log('RESPONSE ON address-changed :: ', response);
      });
      checkout.on('payment-cancelled', function (response) {
        console.log('RESPONSE ON payment-cancelled :: ', response);
      });
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadDibs;
